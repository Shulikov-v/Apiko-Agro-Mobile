import { NavigationActions } from 'react-navigation';

import { get } from '../../utils/api';
import apiAddresses from '../../constants/apiAddresses';

import { initOrganization } from '../../scenes/organization/OrganizationState';
import { initDepartments } from '../../scenes/departments/DepartmentsState';
import { initLocalities } from '../../scenes/localities/LocalitiesState';
import { initUserProfile } from '../../scenes/profile/ProfileState';
import { initFields } from '../../scenes/fields/FieldsState';


export function fetchMapData() {
  return async function(dispatch) {
    const data = await Promise.all([
      get(apiAddresses.ORGANIZATIONS),
      get(apiAddresses.DEPARTMENTS),
      get(apiAddresses.LOCALITIES),
      get(apiAddresses.ACCOUNT_ME),
      get(apiAddresses.FIELDS)
    ]);

    dispatch(initOrganization(data[0].organization));
    dispatch(initDepartments(data[1].departments));
    dispatch(initLocalities(data[2].localities));
    dispatch(initUserProfile(data[3].user));
    dispatch(initFields(data[4].fields));


    dispatch(NavigationActions.navigate({routeName: 'MainDrawer'}));
  }
}
