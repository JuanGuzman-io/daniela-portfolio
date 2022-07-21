import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import data from './data';
import education from './education';
import work from './work';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    data,
    education,
    work
  ]),
})
