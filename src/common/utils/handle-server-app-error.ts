import { Dispatch } from "redux";
import { appActions } from "app/app.reducer";
import { BaseResponseType } from "common/types/common.types";

/**
 *
 * @param data
 * @param dispatch
 * @param showGlobalError
 */
export const handleServerAppError = <D>(data: BaseResponseType<D>, dispatch: Dispatch, showGlobalError = true) => {
  if (showGlobalError) {
    dispatch(appActions.setAppError({ error: data.messages.length ? data.messages[0] : "Some error occurred" }));
  }
  dispatch(appActions.setAppStatus({ status: "failed" }));
};
