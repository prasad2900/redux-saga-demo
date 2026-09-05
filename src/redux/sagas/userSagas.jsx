import { call, put, takeLatest } from 'redux-saga/effects';

// Action Types
import {
    FETCH_USERS_REQUEST,
    fetchUsersSuccess,
    fetchUsersFailure
} from '../actions/userActions';

// fetchUser
function* fetchUser() {
    try {
        // Saga, call this fetch function with given arg. then wait for the result and then contiue
        // Here this 'call' create Effect description - that redux saga can execute and control
        // call API or function also
        // call() is blocking for that Saga.
        const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
        const data = yield response.json();

        yield put(
            fetchUsersSuccess(data)
        )

    } catch (error) {
        // dispatch redux action with latest data to store
        yield put(
            fetchUsersFailure(error.message)
        )
    }
}

// userSaga

function* userSaga() {
    // takeLatest - run only the latest matching saga
    // Whenever FETCH_USERS_REQUEST happens, run fetchUsers, but if another request comes before
    // the previous one finishes, keep the latest one.
    yield takeLatest(
        FETCH_USERS_REQUEST,
        fetchUser
    )
}

export default userSaga;