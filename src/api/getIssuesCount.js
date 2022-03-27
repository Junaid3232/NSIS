import {
  DASHBOARD_DATA,
  INDUSTRIES_COUNT,
  ISSUE_COUNT,
  ORGANIZATION_COUNT,
  ORGANIZATION_STATS,
  REPORT_ISSUE,
  STATE_STATS,
} from '../config/constants';
import {sendRequest} from './base';

export const getIssueCount = async (token, data) => {
  try {
    return sendRequest(data, 'GET', ISSUE_COUNT, {}, token);
  } catch (err) {
    return err;
  }
};
export const getIndustryCount = async (token, data) => {
  try {
    return sendRequest(data, 'GET', INDUSTRIES_COUNT, {}, token);
  } catch (err) {
    return err;
  }
};
export const getOrganizationCount = async (token, data) => {
  try {
    return sendRequest(data, 'GET', ORGANIZATION_COUNT, {}, token);
  } catch (err) {
    return err;
  }
};
export const getAllIssuesCount = async (token, data) => {
  try {
    return sendRequest(data, 'GET', REPORT_ISSUE, {}, token);
  } catch (err) {
    return err;
  }
};
export const dashboardData = async (token, data) => {
  try {
    return sendRequest(data, 'GET', DASHBOARD_DATA, {}, token);
  } catch (err) {
    return err;
  }
};
export const industryStats = async (token, data) => {
  try {
    return sendRequest(data, 'GET', DASHBOARD_DATA, {}, token);
  } catch (err) {
    return err;
  }
};
export const stateStats = async (token, data) => {
  try {
    return sendRequest(data, 'GET', STATE_STATS, {}, token);
  } catch (err) {
    return err;
  }
};
