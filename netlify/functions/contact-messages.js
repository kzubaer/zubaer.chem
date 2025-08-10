import { storage } from '../../server/storage.js';
import { insertContactMessageSchema } from '../../shared/schema.js';
import { z } from 'zod';

export const handler = async (event, context) => {
  try {
    // Handle CORS preflight
    if (event.httpMethod === 'OPTIONS') {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: ''
      };
    }

    if (event.httpMethod === 'GET') {
      const messages = await storage.getContactMessages();
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(messages)
      };
    }

    if (event.httpMethod === 'POST') {
      const body = JSON.parse(event.body);
      
      try {
        const validatedData = insertContactMessageSchema.parse(body);
        const message = await storage.createContactMessage(validatedData);
        
        return {
          statusCode: 201,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify({ 
            message: 'Message sent successfully',
            id: message.id 
          })
        };
      } catch (validationError) {
        if (validationError instanceof z.ZodError) {
          return {
            statusCode: 400,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ 
              message: 'Validation failed', 
              errors: validationError.errors 
            })
          };
        }
        throw validationError;
      }
    }

    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ message: 'Internal server error' })
    };
  }
};