interface keyMirrorList {
  [key: string]: any;
}

export const keyMirror = (list: keyMirrorList) => {
  const newList: keyMirrorList = {};
  Object.keys(list).map(element => {
    const key = String(element);
    newList[key] = element;
    return newList;
  });
  return newList;
};
