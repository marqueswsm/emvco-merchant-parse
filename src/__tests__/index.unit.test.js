const EMVCo = require('../index');
describe('Index unit tests', () => {
  describe('#parse', () => {
    it('should return a valid parse without objects in the values', () => {
      const qrcodeString = '000201010212'
      const parse = EMVCo.Parse(qrcodeString);

      expect(parse).toEqual({
        '00': '01',
        '01': '12',
      });
    });

    it('should return a valid parse with a key containing an object (key 02)', () => {
      const qrcodeString = '0002010206000266'
      const parse = EMVCo.Parse(qrcodeString);

      expect(parse).toEqual({
        '00': '01',
        '02': {
          '00': '66',
        },
      });
    });

    it('should return a valid parse with a key containing an object (key 80)', () => {
      const qrcodeString = '0002018006000266'
      const parse = EMVCo.Parse(qrcodeString);

      expect(parse).toEqual({
        '00': '01',
        '80': {
          '00': '66',
        },
      });
    });

    it('should return a valid parse with a key containing an object (key 62)', () => {
      const qrcodeString = '0002016206000266'
      const parse = EMVCo.Parse(qrcodeString);

      expect(parse).toEqual({
        '00': '01',
        '62': {
          '00': '66',
        },
      });
    });

    it('should return a valid parse with a two keys containing an object (key 62 and 80)', () => {
      const qrcodeString = '00020162060002668006000266'
      const parse = EMVCo.Parse(qrcodeString);

      expect(parse).toEqual({
        '00': '01',
        '62': {
          '00': '66',
        },
        '80': {
          '00': '66',
        },
      });
    });
  });
});