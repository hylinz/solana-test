"use server";
import { sql } from "@vercel/postgres";

export const newWallet = async (connection_string: string) => {
  const response = {
    success: false,
    message: '',
  }

  try {
    // check if the connection string already exists
    const result = await sql`
      SELECT * FROM Wallets WHERE connection_string = ${connection_string};
    `;
    if (result.rows.length > 0) {
      response.message = `Wallet already exists with connection string: "${connection_string}"`;
      return response;
    }

    // if it doesn't exist, add it
    await sql`
      INSERT INTO Wallets (connection_string)
      VALUES (${connection_string});
    `;
    response.success = true;
    response.message = `Successfully added wallet with connection string: "${connection_string}"`;
    return response;
  } catch (error) {
    response.message = `ERROR: ${error}`;
    return response;
  }
}

export const searchWallet = async (connection_string: string) => {
  const response = {
    success: false,
    canAdd: false,
    message: ''
  }

  try {
    const result = await sql`
      SELECT * FROM Wallets
      WHERE connection_string = ${connection_string}
    `;
    if (!result.rows.length) {
      response.success = true;
      response.canAdd = true;
      response.message = `Wallet with connection string "${connection_string}" is unique.`;
      return response;
    }
    response.success = true;
    response.message = `Wallet with connection string "${connection_string}" already exist.`;
    return response;

  } catch (error) {
    response.message = `ERROR: ${error}`;
    return response;
  }
}

