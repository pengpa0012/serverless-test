import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import AWS from "aws-sdk";

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = "Todos";

export const updateTodo = async (event: APIGatewayProxyEvent) => {
  const id = event.pathParameters?.id;
  const { title, description } = JSON.parse(event.body || "{}");

  const params = {
    TableName: tableName,
    Key: {
      id: id
    },
    UpdateExpression: "set title = :t, description = :d",
    ExpressionAttributeValues: {
      ":t": title,
      ":d": description
    },
    ReturnValues: "UPDATED_NEW"
  };

  try {
    const data = await dynamoDB.update(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Todo updated successfully",
          updatedItem: data.Attributes
        },
        null,
        2
      ),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          message: "Cannot update todo"
        },
        null,
        2
      ),
    };
  }
};