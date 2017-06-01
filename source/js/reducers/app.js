import {
  ADD_ITEM,
  SHOW_ALAMR,
  CLOSE_ALAMR,
  REMOVE_ITEM,
  TOOGLE_FLIP_ITEM,
  TOOGLE_CHECK_ITEM
} from 'actions/app';

const initialState = {
  alarm: null,
  list: [],
  status: {
    all: 0,
    checked: []
  },
  event: ''
};

const actionsMap = {
  [ADD_ITEM]: (state, action) => {
    const id = new Date().getTime();
    const { payload={}, type='' } = action;
    const { status={} } = state;
    let { list=[] } = state;

    list = [...list, {cecked: false, flipped: false, pro: payload, id}];

    return {
      ...state,
      list,
      status: {
        all: list.length,
        checked: list.filter(i => i.checked)
      },
      event: type
    }
  },

  [REMOVE_ITEM]: (state, action) => {
    const { payload={}, type='' } = action;
    let { list=[] } = state;

    list = list.filter(i => payload !== i.id);

    return {
      ...state,
      list,
      status: {
        all: list.length,
        checked: list.filter(i => i.checked)
      },
      event: type
    }
  },

  [TOOGLE_CHECK_ITEM]: (state, action) => {
    const { payload={}, type='' } = action;
    const { id, checked, flipped } = payload;
    const { status={} } = state;
    let { list=[] } = state;

    list = list.map(i => id == i.id ? {...i, checked: !checked} : i);

    return {
      ...state,
      list,
      status: {
        ...status,
        checked: list.filter(i => i.checked)
      },
      event: type
    }
  },

  [TOOGLE_FLIP_ITEM]: (state, action) => {
    const { payload={}, type='' } = action;
    const { id, flipped } = payload;
    const { status={} } = state;
    let { list=[] } = state;

    list = list.map(i => id == i.id ? {...i, flipped: !flipped} : i);

    return {
      ...state,
      list,
      status: {
        ...status,
        checked: list.filter(i => i.checked)
      },
      event: type
    }
  },

  [SHOW_ALAMR]: (state, action) => ({
    ...state,
    alarm: action.payload,
    event: action.type
  }),

  [CLOSE_ALAMR]: (state, action) => {
    const { payload={}, type='' } = action;
    const { alarm } = state;
    let { list } = state;

    list = list.filter(i => !payload || alarm !== i.id);

    return {
      list,
      alarm: null,
      status: {
        all: list.length,
        checked: list.filter(i => i.checked)
      },
      event: type
    }
  }
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];

  return fn ? fn(state, action) : state;
}
