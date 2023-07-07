from models import Task, UpdateTask
from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId
# from decouple import config


client = AsyncIOMotorClient("mongodb://localhost:27017")
database = client.FARM
collection = database.tasks

#Usada
# async def get_one_task_id(id):
#     task = await collection.find_one({"_id": ObjectId(id)})
#     return task


#Usada
async def get_one_task_id(id):
    object_id = ObjectId(id)
    task = await collection.find_one({"_id": object_id})
    return task

async def get_one_task_title(title):
    task = await collection.find_one({"title": title})
    return task

#Usada
async def get_all_tasks():
    tasks = []
    cursor = collection.find({})
    async for document in cursor:
        tasks.append(Task(**document))
    return tasks

#No usada
async def create_task(task):
    new_task = await collection.insert_one(task)
    created_task = await collection.find_one({"_id": new_task.inserted_id})
    return created_task

#No usada
async def update_task(id: str, data):
    task = {k: v for k, v in data.dict().items() if v is not None}
    print(task)
    await collection.update_one({"_id": ObjectId(id)}, {"$set": task})
    document = await collection.find_one({"_id": ObjectId(id)})
    return document

#Usada
async def delete_task(id):
    await collection.delete_one({"_id": ObjectId(id)})
    return True
