// Source-driven reconstruction data model.
// Deliberately contains no guessed character geometry.
// Traces are populated from measured source landmarks.
export const SOURCE_IMAGE = {
  file: "SI_86343F68-B918-496A-8BA4-D5D6AD2F492C.png",
  width: 1536,
  height: 1536
};

export const COMPONENTS = [
  "torso", "leftThigh", "rightThigh",
  "leftLowerLeg", "rightLowerLeg",
  "leftFoot", "rightFoot",
  "leftToe1", "leftToe2", "leftToe3", "leftToe4", "leftToe5",
  "rightToe1", "rightToe2", "rightToe3", "rightToe4", "rightToe5"
];

export function emptyTrace(name) {
  return { name, closed: true, points: [] };
}

export function emptyCharacter() {
  return {
    source: SOURCE_IMAGE.file,
    components: Object.fromEntries(COMPONENTS.map(name => [name, emptyTrace(name)]))
  };
}
