import { createStore } from 'redux';

const pageReducer = (currentState, action) => {
	//Initialize
	if (currentState === undefined) {
		return {
			page:1,
      pageCount:null
		}
	}

		const newState = { ...currentState };
    switch (action.type) {
      case 'CURRENT_PAGE': 
        newState.page = action.page;
        break;
      case 'PAGE_COUNT':
        newState.pageCount = action.pageCount;
      default:
        console.log('error: content redux error, no type');
    }
    return newState;
}

export const pageStore = createStore(pageReducer);

export default pageReducer;