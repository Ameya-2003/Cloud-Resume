# Initial Check for github actions
import json
import boto3
import os
from decimal import Decimal

# Initialize DynamoDB client
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ.get('TABLE_NAME', 'visitor-counter-dev'))

# Custom JSON encoder to handle Decimal types from DynamoDB
class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return int(obj)
        return super(DecimalEncoder, self).default(obj)

def lambda_handler(event, context):
    """
    Lambda function handler for visitor counter.
    Supports both GET and POST methods:
    - GET: Retrieves the current visitor count
    - POST: Increments the visitor count by one
    """
    # Get the HTTP method from the event
    http_method = event.get('httpMethod', 'GET')

    # CORS headers for all responses
    headers = {
        'Access-Control-Allow-Origin': '*',  # Replace with your domain in production
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
    }

    # Handle OPTIONS request (preflight)
    if http_method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps({})
        }

    try:
        # Get current count
        response = table.get_item(
            Key={
                'id': 'visitors'
            }
        )

        # If the counter doesn't exist yet, initialize it with 0
        if 'Item' not in response:
            count = 0
            table.put_item(
                Item={
                    'id': 'visitors',
                    'count': count
                }
            )
        else:
            count = response['Item']['count']

        # Increment the counter for POST requests
        if http_method == 'POST':
            count += 1
            table.update_item(
                Key={
                    'id': 'visitors'
                },
                UpdateExpression='SET #count = :val',
                ExpressionAttributeNames={
                    '#count': 'count'
                },
                ExpressionAttributeValues={
                    ':val': count
                }
            )

        # Return the response with current count
        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps({
                'count': count
            }, cls=DecimalEncoder)
        }

    except Exception as e:
        print(f"Error: {str(e)}")
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({
                'error': str(e)
            })
        }