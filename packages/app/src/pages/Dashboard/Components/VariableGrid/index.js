import React from 'react';

import { VariableSizeGrid as Grid } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

export const GRID_MAX_WIDTH = 1900;
export const MAX_COLUMN_COUNT = 6;
export const GUTTER = 36;
const ITEM_MIN_WIDTH = 220;
const ITEM_HEIGHT_GRID = 240;
// const ITEM_HEIGHT_LIST = 64;
// const HEADER_HEIGHT = 64;
// const GRID_VERTICAL_OFFSET = 120;
const ITEM_VERTICAL_OFFSET = 32;

const Item = ({ data, rowIndex, columnIndex, style }) => {
  const { items, columnCount, containerWidth } = data;

  const totalWidth = containerWidth;
  const containerLeftOffset = 0;
  const spaceReqiuredForGutters = GUTTER * (columnCount - 1);
  const spaceLeftForItems = totalWidth - spaceReqiuredForGutters;
  const numberOfItems = columnCount;
  const eachItemWidth = spaceLeftForItems / numberOfItems;
  const spaceTakenBeforeThisItem = containerLeftOffset + columnIndex * (eachItemWidth + GUTTER);
  const leftOffset = spaceTakenBeforeThisItem + 0;

  const index = rowIndex * data.columnCount + columnIndex;
  const item = items[index];

  const margins = {
    marginTop: ITEM_VERTICAL_OFFSET,
    marginBottom: ITEM_VERTICAL_OFFSET,
  };

  const numberOfRows = Math.ceil(items.length / columnCount);
  const isLastRow = rowIndex === numberOfRows - 1;
  if (isLastRow) {
    margins.marginBottom += ITEM_VERTICAL_OFFSET;
  }

  if (!item) {
    return null;
  }

  return (
    <div
      className="border border-sandbox rounded text-center"
      style={{
        ...style,
        width: eachItemWidth,
        left: leftOffset,
        height: (style.height) - GUTTER,
        ...margins,
      }}
    >
      <h1>{item.title}</h1>
    </div>
  );
};

const VariableGrid = ({ items }) => {
  const gridRef = React.useRef(null);

  const ITEM_HEIGHT = ITEM_HEIGHT_GRID;

  React.useEffect(() => {
    recalculatePositions();
  }, [items]);

  const onResize = () => {
    recalculatePositions();
  };

  const recalculatePositions = () => {
    if (gridRef.current) {
      gridRef.current.resetAfterIndices({
        columnIndex: 0,
        rowIndex: 0,
        shouldForceUpdate: true,
      });
    }
  };

  const getRowHeight = (rowIndex, columnCount) => {
    return ITEM_HEIGHT + GUTTER;
  };

  return (
    <div className="w-100 pb-3">
      <AutoSizer
        disableHeight={true}
        onResize={onResize}
      >
        {({ width }) => {
          const cappedWith = width;
          const columnCount = Math.min(
            Math.floor((cappedWith - GUTTER) / (ITEM_MIN_WIDTH + GUTTER)),
            MAX_COLUMN_COUNT
          ) || 1;
          const rowCount = Math.ceil(items.length / columnCount);

          return (
            <Grid
              ref={gridRef}
              height={rowCount * (ITEM_HEIGHT_GRID + GUTTER)}
              width={width}
              columnCount={columnCount}
              rowCount={rowCount}
              columnWidth={index => width / columnCount}
              rowHeight={rowIndex => getRowHeight(rowIndex, columnCount, items)}
              estimatedColumnWidth={width / columnCount}
              estimatedRowHeight={ITEM_HEIGHT}
              itemData={{
                items,
                columnCount,
                containerWidth: width,
              }}
            >
              {Item}
            </Grid>
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default VariableGrid;