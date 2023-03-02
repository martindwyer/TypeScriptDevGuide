///<reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { AppMap } from './AppMap';

const user = new User();
const company = new Company();
const appMap = new AppMap('map');

appMap.addMarker(user);
appMap.addMarker(company);
