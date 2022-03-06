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

export const getIssueCount = async data => {
  try {
    return sendRequest(data, 'GET', ISSUE_COUNT, {});
  } catch (err) {
    return err;
  }
};
export const getIndustryCount = async data => {
  try {
    return sendRequest(data, 'GET', INDUSTRIES_COUNT, {});
  } catch (err) {
    return err;
  }
};
export const getOrganizationCount = async data => {
  try {
    return sendRequest(data, 'GET', ORGANIZATION_COUNT, {});
  } catch (err) {
    return err;
  }
};
export const getAllIssuesCount = async data => {
  try {
    return sendRequest(data, 'GET', REPORT_ISSUE, {});
  } catch (err) {
    return err;
  }
};
export const dashboardData = async data => {
  try {
    return sendRequest(data, 'GET', DASHBOARD_DATA, {});
  } catch (err) {
    return err;
  }
};
export const industryStats = async data => {
  try {
    return sendRequest(data, 'GET', DASHBOARD_DATA, {});
  } catch (err) {
    return err;
  }
};
export const stateStats = async data => {
  try {
    return sendRequest(data, 'GET', STATE_STATS, {});
  } catch (err) {
    return err;
  }
};
