import { all } from 'redux-saga/effects';

import userSaga from './userSagas';

function* rootSaga() {
    // you can keep add other saga as well in the array
    // e.g. userSaga, productSaga, authSaga, orderSaga etc...
    yield all([
        userSaga()
    ])
}

export default rootSaga;