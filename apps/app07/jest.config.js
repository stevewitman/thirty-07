module.exports = {
  name: 'app07',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app07',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
