# Chess-Themed AWS Cloud Resume Challenge

This repository contains the static website files for my AWS Cloud Resume Challenge project. The design features a unique chess theme with interactive elements.

## Project Files

- `index.html` - The HTML file containing the structure of the resume website
- `styles.css` - The CSS file with all styling for the chess theme
- `scripts.js` - JavaScript for interactive elements including the chess board and visitor counter

## AWS Cloud Resume Challenge Requirements

This project is built to satisfy the AWS Cloud Resume Challenge, which requires:

1. **HTML/CSS Resume**: The resume is written in HTML and styled with CSS, not a Word document or PDF.

2. **Static Website on S3**: The website should be deployed as an Amazon S3 static website.

3. **HTTPS**: The website should use HTTPS for security via Amazon CloudFront.

4. **Custom Domain**: A custom DNS domain name should point to the CloudFront distribution, using Amazon Route 53 or another DNS provider.

5. **JavaScript Visitor Counter**: The website includes a JavaScript visitor counter that displays the number of visitors.

6. **Database for Counter**: The visitor counter retrieves and updates its count in Amazon DynamoDB.

7. **API for Counter**: Communication with DynamoDB happens through an API created with AWS API Gateway and Lambda.

8. **Python for Backend**: The Lambda function is written in Python with the boto3 library.

9. **Tests for Python Code**: Includes tests for the Python code.

10. **Infrastructure as Code**: All AWS resources are defined using AWS SAM or Terraform.

11. **Source Control**: Code is stored in GitHub repositories.

12. **CI/CD for Backend**: GitHub Actions for testing and deploying backend code.

13. **CI/CD for Frontend**: GitHub Actions for deploying website code to S3.

## Deployment Instructions

### 1. Frontend Deployment (S3 + CloudFront)

1. Create an S3 bucket for website hosting:
   ```
   aws s3 mb s3://your-resume-bucket-name
   ```

2. Enable static website hosting on the bucket:
   ```
   aws s3 website s3://your-resume-bucket-name --index-document index.html
   ```

3. Upload the website files:
   ```
   aws s3 sync ./static/ s3://your-resume-bucket-name
   ```

4. Create a CloudFront distribution pointing to your S3 bucket.

5. Configure a custom domain with Route 53.

### 2. Backend Deployment (API Gateway + Lambda + DynamoDB)

1. Create a DynamoDB table for the visitor counter:
   ```
   aws dynamodb create-table \
       --table-name visitor-counter \
       --attribute-definitions AttributeName=id,AttributeType=S \
       --key-schema AttributeName=id,KeyType=HASH \
       --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1
   ```

2. Initialize the counter with a starting value:
   ```
   aws dynamodb put-item \
       --table-name visitor-counter \
       --item '{"id": {"S": "visitors"}, "count": {"N": "0"}}'
   ```

3. Create a Lambda function from the provided Python code.

4. Set up an API Gateway to trigger the Lambda function.

5. Configure CORS on the API Gateway to allow requests from your website domain.

### 3. CI/CD Setup

1. Create a GitHub repository for your frontend code.

2. Create a GitHub repository for your backend code.

3. Set up GitHub Actions workflows for both repositories to automate deployment.

## AWS Services Used

- **S3**: To host the static website files
- **CloudFront**: To provide HTTPS and CDN capabilities
- **Route 53**: For domain name registration and DNS management
- **API Gateway**: To create a RESTful API for the visitor counter
- **Lambda**: To run the serverless function that updates and retrieves the visitor count
- **DynamoDB**: To store the visitor count
- **IAM**: To manage permissions across services
- **AWS SAM/CloudFormation**: For infrastructure as code
- **GitHub Actions**: For CI/CD pipeline

## Python Lambda Function Example

Below is a simplified example of what the Lambda function for updating the visitor counter might look like:

```python
import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('visitor-counter')

def lambda_handler(event, context):
    # Get the current count
    response = table.get_item(
        Key={
            'id': 'visitors'
        }
    )
    
    # Check if the item exists
    if 'Item' not in response:
        # Initialize the counter if it doesn't exist
        count = 1
        table.put_item(
            Item={
                'id': 'visitors',
                'count': count
            }
        )
    else:
        # Increment the counter
        count = response['Item']['count'] + 1
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
    
    # Return the new count with CORS headers
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
        },
        'body': json.dumps({
            'count': count
        })
    }
```

## Customizing the Resume

Feel free to update the content in `index.html` to reflect your own experience, skills, and projects.

## License

This project is open-source and available under the MIT License.