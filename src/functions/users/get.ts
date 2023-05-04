import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import AWS from "aws-sdk";

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = "Todos";

export const getTodo = async (event: APIGatewayProxyEvent) => {
 
  const params = {
    TableName: tableName
  };
  
  dynamoDB.scan(params, (err, data) => {
    if (err) {
      return {
        statusCode: 500,
        body: JSON.stringify(
          {
            message: "Cannot get todos"
          },
          null,
          2
        ),
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify(
          {
            todos: data
          },
          null,
          2
        ),
      };
    }
  });
}; 