import {
  DEFAULT_INDENTATION,
} from './constants.js';

export default (data: object,): string => JSON
  .stringify(data, null, DEFAULT_INDENTATION,)
  .replace(/'/ug, '\\\\\'',)
  .replace(/"([a-z][^a-z0-9A-Z_]+?)":/ug, '$1:',)
  .replace(/"([^"]+?)":/ug, '\'$1\':',)
  .replace(/\n/ug, ',\n',)
  .replace(/"([^"]+?)",/ug, '\'$1\',',)
  .replace(/,,/ug, ',',)
  .replace(/\{,/ug, '{',)
  .replace(/\\\\'/ug, '\\\'',)
  .replace(/\\'(.*?)\\':/ug, '\'$1\':',)
  .replace(/: "(.+?)",/ug, ': \'$1\',',)
  .replace(/\[,/ug, '[',);
