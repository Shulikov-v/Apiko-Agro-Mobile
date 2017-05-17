import { NavigationActions } from 'react-navigation';

import { apiEndpoint, get } from '../../utils/api';

import { initOrganization } from '../../scenes/organization/OrganizationState';
import { initDepartments } from '../../scenes/departments/DepartmentsState';
import { initLocalities } from '../../scenes/localities/LocalitiesState';
import { initUserProfile } from '../../scenes/profile/ProfileState';
import { initFields } from '../../scenes/fields/FieldsState';


export function fetchMapData() {
  return async function fetchAll(dispatch) {
    const data = await Promise.all([
      get(apiEndpoint.ORGANIZATIONS),
      get(apiEndpoint.DEPARTMENTS),
      get(apiEndpoint.LOCALITIES),
      get(apiEndpoint.ACCOUNT_ME),
      get(apiEndpoint.FIELDS),
    ]);

    dispatch(initOrganization(data[0].organization));
    dispatch(initDepartments(data[1].departments));
    dispatch(initLocalities(data[2].localities));
    dispatch(initUserProfile(data[3].user));
    dispatch(initFields(data[4].fields));


    dispatch(NavigationActions.navigate({ routeName: 'MainDrawer' }));
  };
}
