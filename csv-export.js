// CSV Export Module
// Handles exporting data to CSV format with proper escaping

const { stringify } = require('csv-stringify');
const { Readable } = require('stream');

/**
 * Export data to CSV format
 * @param {Array} data - Array of objects to export
 * @param {Object} options - Export options
 * @returns {Promise<string>} CSV string
 */
async function exportToCSV(data, options = {}) {
  const {
    columns = null, // Auto-detect if not provided
    header = true,
    quoted = true,
    escape = '"',
    delimiter = ','
  } = options;

  return new Promise((resolve, reject) => {
    const stringifier = stringify({
      header,
      columns,
      quoted,
      escape,
      delimiter
    });

    let output = '';

    stringifier.on('readable', function() {
      let row;
      while ((row = stringifier.read()) !== null) {
        output += row;
      }
    });

    stringifier.on('error', reject);
    stringifier.on('finish', () => resolve(output));

    // Write data
    data.forEach(record => stringifier.write(record));
    stringifier.end();
  });
}

/**
 * Stream large datasets to CSV
 * @param {Readable} dataStream - Stream of data objects
 * @param {WritableStream} outputStream - Output stream for CSV
 * @param {Object} options - Export options
 */
function streamToCSV(dataStream, outputStream, options = {}) {
  const stringifier = stringify({
    header: true,
    quoted: true,
    ...options
  });

  dataStream.pipe(stringifier).pipe(outputStream);
}

module.exports = {
  exportToCSV,
  streamToCSV
};
