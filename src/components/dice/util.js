export const valueClassMap = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
};

export const faceTransformMap = {
  1: (translate) => ({ transform: `rotateX(-90deg) translate3d(0, 0, ${translate}px)` }),
  2: (translate) => ({ transform: `translate3d(0, 0, ${translate}px)` }),
  3: (translate) => ({ transform: `rotateY(180deg) translate3d(0, 0, ${translate}px)` }),
  4: (translate) => ({ left: '50%', marginLeft: `-${translate}px`, transform: `rotateY(-90deg) translate3d(0, 0, ${translate}px)` }),
  5: (translate) => ({ left: '50%', marginLeft: `-${translate}px`, transform: `rotateY(90deg) translate3d(0, 0, ${translate}px)` }),
  6: (translate) => ({ transform: `rotateX(90deg) translate3d(0, 0, ${translate}px)` }),
};

export const defaultFaceGrid = {
  1: [12],
  2: [11, 13],
  3: [6, 12, 18],
  4: [6, 8, 16, 18],
  5: [6, 8, 12, 16, 18],
  6: [6, 8, 11, 13, 16, 18],
};

export const faceClasses = [
  '_3dface _3dface--one',
  '_3dface _3dface--two',
  '_3dface _3dface--three',
  '_3dface _3dface--four',
  '_3dface _3dface--five',
  '_3dface _3dface--six',
];

export const times = (counter, callback) => {
  const data = [];
  for (let i = 0; i < counter; i += 1) {
    data.push(callback(i));
  }

  return data;
};
