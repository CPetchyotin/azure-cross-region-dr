import { CosmosClient } from "@azure/cosmos";

// ดึงกุญแจจากไฟล์ .env
const endpoint = process.env.COSMOS_CONNECTION_STRING;
const client = new CosmosClient(endpoint);

// ตั้งชื่อ Database และตาราง (Container)
const databaseId = "EnterpriseDB";
const containerId = "ContactLeads";

export async function getContainer() {
  const { database } = await client.databases.createIfNotExists({ id: databaseId });
  const { container } = await database.containers.createIfNotExists({ id: containerId });
  return container;
}