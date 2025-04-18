import unittest
import json
from unittest.mock import patch, MagicMock
import app

class TestVisitorCounter(unittest.TestCase):
    """
    Unit tests for the visitor counter Lambda function
    """
    
    @patch('app.table')
    def test_get_visitor_count(self, mock_table):
        """Test retrieving the visitor count"""
        # Mock DynamoDB response
        mock_table.get_item.return_value = {
            'Item': {
                'id': 'visitors',
                'count': 42
            }
        }
        
        # Create a mock GET event
        event = {
            'httpMethod': 'GET'
        }
        
        # Call the Lambda handler
        response = app.lambda_handler(event, None)
        
        # Verify the response
        self.assertEqual(response['statusCode'], 200)
        body = json.loads(response['body'])
        self.assertEqual(body['count'], 42)
        
        # Verify DynamoDB was called correctly
        mock_table.get_item.assert_called_once_with(
            Key={
                'id': 'visitors'
            }
        )
        # Assert update_item was not called for GET request
        mock_table.update_item.assert_not_called()
    
    @patch('app.table')
    def test_increment_visitor_count(self, mock_table):
        """Test incrementing the visitor count"""
        # Mock DynamoDB responses
        mock_table.get_item.return_value = {
            'Item': {
                'id': 'visitors',
                'count': 42
            }
        }
        
        # Create a mock POST event
        event = {
            'httpMethod': 'POST'
        }
        
        # Call the Lambda handler
        response = app.lambda_handler(event, None)
        
        # Verify the response
        self.assertEqual(response['statusCode'], 200)
        body = json.loads(response['body'])
        self.assertEqual(body['count'], 43)  # Should be incremented
        
        # Verify DynamoDB was called correctly
        mock_table.get_item.assert_called_once_with(
            Key={
                'id': 'visitors'
            }
        )
        mock_table.update_item.assert_called_once_with(
            Key={
                'id': 'visitors'
            },
            UpdateExpression='SET #count = :val',
            ExpressionAttributeNames={
                '#count': 'count'
            },
            ExpressionAttributeValues={
                ':val': 43
            }
        )
    
    @patch('app.table')
    def test_initialize_counter_if_not_exists(self, mock_table):
        """Test initializing the counter if it doesn't exist"""
        # Mock DynamoDB response for non-existent counter
        mock_table.get_item.return_value = {}
        
        # Create a mock GET event
        event = {
            'httpMethod': 'GET'
        }
        
        # Call the Lambda handler
        response = app.lambda_handler(event, None)
        
        # Verify the response
        self.assertEqual(response['statusCode'], 200)
        body = json.loads(response['body'])
        self.assertEqual(body['count'], 0)
        
        # Verify DynamoDB was called correctly
        mock_table.get_item.assert_called_once()
        mock_table.put_item.assert_called_once_with(
            Item={
                'id': 'visitors',
                'count': 0
            }
        )
    
    @patch('app.table')
    def test_options_method(self, mock_table):
        """Test OPTIONS method for CORS preflight"""
        # Create a mock OPTIONS event
        event = {
            'httpMethod': 'OPTIONS'
        }
        
        # Call the Lambda handler
        response = app.lambda_handler(event, None)
        
        # Verify the response
        self.assertEqual(response['statusCode'], 200)
        self.assertIn('Access-Control-Allow-Origin', response['headers'])
        self.assertIn('Access-Control-Allow-Methods', response['headers'])
        
        # No DynamoDB calls should be made
        mock_table.get_item.assert_not_called()
        mock_table.update_item.assert_not_called()
        mock_table.put_item.assert_not_called()
    
    @patch('app.table')
    def test_exception_handling(self, mock_table):
        """Test exception handling in the Lambda function"""
        # Mock DynamoDB to raise an exception
        mock_table.get_item.side_effect = Exception("Test error")
        
        # Create a mock GET event
        event = {
            'httpMethod': 'GET'
        }
        
        # Call the Lambda handler
        response = app.lambda_handler(event, None)
        
        # Verify the response
        self.assertEqual(response['statusCode'], 500)
        body = json.loads(response['body'])
        self.assertIn('error', body)
        self.assertEqual(body['error'], "Test error")

if __name__ == '__main__':
    unittest.main()