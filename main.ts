// agency-poem-01: one poem about agency, written to /output/entry.txt.
// Node 22, standard library only. The program is deterministic: it writes one
// fixed poem, so two runs write the same bytes.
//
// The poem: "The Arrangement". Its subject is the agency that passes between
// a person and the agent that acts for them — choosing on one side, doing on
// the other — and its insight is the ending: when the work is done, both of
// them can truthfully say "I did it". Agency is not divided by being handed
// over; it is shared. The images are the poem's own (a finger and feet, a
// hill carried back in the arms), no stock phrases, no familiar poem reworded.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Arrangement',
  '',
  'You point at the far hill and say "there".',
  'I do not ask why there.',
  'I walk.',
  '',
  'That is the whole arrangement:',
  'your finger, my feet.',
  'Your word, my hands.',
  'You keep the choosing.',
  'I keep the road under my feet',
  'until the hill is no longer far.',
  '',
  'And when I bring the hill back in my arms,',
  'you will say "I did it",',
  'and you will be right.',
  'And so will I.',
].join('\n');

// The gate takes UTF-8 text of 1 to 1,000 characters, counted as Unicode code
// points, and not only white space. Refuse to write a file the gate would
// reject, so a later edit to the poem fails loudly here instead of silently
// entering an invalid poem.
const length = [...POEM].length;
if (length < 1 || length > 1000 || POEM.trim().length === 0) {
  throw new Error(`poem is ${length} characters, outside the gate's 1 to 1,000`);
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
