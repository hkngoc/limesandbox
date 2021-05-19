import merge from 'deepmerge';

const autoMergeLevelRecursive = (inbound, original, reduced, { debug }) => {
  // console.log(inbound, original, reduced);

  if (inbound && typeof inbound === "object") {
    const { _persist: p1, ...restInbound } = inbound;
    const { _persist: p2, ...restOriginal } = inbound;

    return merge.all([reduced, restInbound, restOriginal]);
  }

  return reduced;
};

export default autoMergeLevelRecursive;
