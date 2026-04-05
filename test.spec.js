const FEATURE = require('./feature');


test('Processing users correctly', async () => {
    const result = await FEATURE.processUsers();
    expect(result).toEqual({
        activeAdults: ["Pedro", "João", "Maria"],
        averageAge: 21.8,
        minorsCount: 2,
        totalActive: 3
    });
})

test('Should throw API error', async () => {
    const mock = jest.fn().mockRejectedValue(new Error("API ERROR!"));
    await expect(FEATURE.processUsers(mock)).rejects.toThrow("API ERROR!");
})