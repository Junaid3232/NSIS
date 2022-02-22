import { REPORT_ISSUE } from '../config/constants';
import { sendRequest } from './base';

export const reportIssue = async data => {
  try {
    return sendRequest(data, 'POST', REPORT_ISSUE, {});
  } catch (err) {
    return err;
  }
};
