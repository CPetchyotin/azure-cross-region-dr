import { CosmosClient } from "@azure/cosmos";

const databaseId = "EnterpriseDB";
const containerId = "ContactLeads";

let client;

export async function getContainer() {
  if (!client) {
    const endpoint = process.env.COSMOS_CONNECTION_STRING;

    if (!endpoint) {
      throw new Error("⚠️ หา COSMOS_CONNECTION_STRING ไม่เจอในไฟล์ .env ครับ!");
    }

    client = new CosmosClient(endpoint);
  }

  const { database } = await client.databases.createIfNotExists({
    id: databaseId,
  });
  const { container } = await database.containers.createIfNotExists({
    id: containerId,
  });

  return container;
}
