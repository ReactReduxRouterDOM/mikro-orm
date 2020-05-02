export enum QueryType {
  TRUNCATE = 'TRUNCATE',
  SELECT = 'SELECT',
  COUNT = 'COUNT',
  INSERT = 'INSERT',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export enum QueryFlag {
  DISTINCT = 'DISTINCT',
  UPDATE_SUB_QUERY = 'UPDATE_SUB_QUERY',
}