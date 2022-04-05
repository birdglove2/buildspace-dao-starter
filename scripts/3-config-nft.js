import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const editionDrop = sdk.getEditionDrop('0x54370BF2e0747138864A03E3B201096C233ade54');

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: 'Keychron K1',
        description: 'This NFT will give you access to MechKeysDAO!',
        image: readFileSync('scripts/assets/keychronk1.jpeg'),
      },
    ]);
    console.log('✅ Successfully created a new NFT in the drop!');
  } catch (error) {
    console.error('failed to create the new NFT', error);
  }
})();
