const request = require('supertest');
const app=require('../app');

test('health API should return status OK',async()=>{
    const response= await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({status:"OK"});
});

test('hello API should return Hello World message',async()=>{
    const response= await request(app).get('/hello');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({message:"Hello World!"});
});

test('status API should return running status',async()=>{
    const response= await request(app).get('/status');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({status:"Wrong"});
});
