// Tests for CSV Export Module

const { exportToCSV } = require('./csv-export');

describe('CSV Export', () => {
  test('exports simple data to CSV', async () => {
    const data = [
      { name: 'John', age: 30, city: 'New York' },
      { name: 'Jane', age: 25, city: 'San Francisco' }
    ];

    const csv = await exportToCSV(data);

    expect(csv).toContain('name,age,city');
    expect(csv).toContain('John');
    expect(csv).toContain('Jane');
  });

  test('handles special characters', async () => {
    const data = [
      { text: 'Hello, World!', quote: 'Say "Hi"' },
      { text: 'Line\nBreak', quote: "It's" }
    ];

    const csv = await exportToCSV(data);

    expect(csv).toContain('"Hello, World!"');
    expect(csv).toContain('"Say ""Hi"""');
  });

  test('supports custom delimiter', async () => {
    const data = [
      { a: '1', b: '2' }
    ];

    const csv = await exportToCSV(data, { delimiter: ';' });

    expect(csv).toContain(';');
  });
});
