/**
 * @generated
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 **/

 /**
 * @flow
 * @relayHash 697e3997074ffe1ff1803c1ef654ef4f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PermissionValue = "BY_CONDITION" | "NO" | "YES" | "%future added value";
export type UserRole = "ADMIN" | "OWNER" | "USER" | "%future added value";
export type UserStatus = "ACTIVE" | "DEACTIVATED" | "%future added value";
export type UsersGroupStatus = "ACTIVE" | "DEACTIVATED" | "%future added value";
export type EditUsersGroupInput = {|
  id: string,
  name?: ?string,
  description?: ?string,
  status?: ?UsersGroupStatus,
  members?: ?$ReadOnlyArray<string>,
  policies?: ?$ReadOnlyArray<string>,
|};
export type EditUsersGroupMutationVariables = {|
  input: EditUsersGroupInput
|};
export type EditUsersGroupMutationResponse = {|
  +editUsersGroup: {|
    +id: string,
    +name: string,
    +description: ?string,
    +status: UsersGroupStatus,
    +members: $ReadOnlyArray<{|
      +id: string,
      +authID: string,
      +firstName: string,
      +lastName: string,
      +email: string,
      +status: UserStatus,
      +role: UserRole,
    |}>,
    +policies: $ReadOnlyArray<{|
      +id: string,
      +name: string,
      +description: ?string,
      +isGlobal: boolean,
      +policy: {|
        +__typename: "InventoryPolicy",
        +read: {|
          +isAllowed: PermissionValue
        |},
        +location: {|
          +create: {|
            +isAllowed: PermissionValue
          |},
          +update: {|
            +isAllowed: PermissionValue,
            +locationTypeIds: ?$ReadOnlyArray<string>,
          |},
          +delete: {|
            +isAllowed: PermissionValue
          |},
        |},
        +equipment: {|
          +create: {|
            +isAllowed: PermissionValue
          |},
          +update: {|
            +isAllowed: PermissionValue
          |},
          +delete: {|
            +isAllowed: PermissionValue
          |},
        |},
        +equipmentType: {|
          +create: {|
            +isAllowed: PermissionValue
          |},
          +update: {|
            +isAllowed: PermissionValue
          |},
          +delete: {|
            +isAllowed: PermissionValue
          |},
        |},
        +locationType: {|
          +create: {|
            +isAllowed: PermissionValue
          |},
          +update: {|
            +isAllowed: PermissionValue
          |},
          +delete: {|
            +isAllowed: PermissionValue
          |},
        |},
        +portType: {|
          +create: {|
            +isAllowed: PermissionValue
          |},
          +update: {|
            +isAllowed: PermissionValue
          |},
          +delete: {|
            +isAllowed: PermissionValue
          |},
        |},
        +serviceType: {|
          +create: {|
            +isAllowed: PermissionValue
          |},
          +update: {|
            +isAllowed: PermissionValue
          |},
          +delete: {|
            +isAllowed: PermissionValue
          |},
        |},
      |} | {|
        +__typename: "WorkforcePolicy",
        +read: {|
          +isAllowed: PermissionValue,
          +projectTypeIds: ?$ReadOnlyArray<string>,
          +workOrderTypeIds: ?$ReadOnlyArray<string>,
        |},
        +templates: {|
          +create: {|
            +isAllowed: PermissionValue
          |},
          +update: {|
            +isAllowed: PermissionValue
          |},
          +delete: {|
            +isAllowed: PermissionValue
          |},
        |},
        +data: {|
          +create: {|
            +isAllowed: PermissionValue
          |},
          +update: {|
            +isAllowed: PermissionValue
          |},
          +delete: {|
            +isAllowed: PermissionValue
          |},
          +assign: {|
            +isAllowed: PermissionValue
          |},
          +transferOwnership: {|
            +isAllowed: PermissionValue
          |},
        |},
      |} | {|
        // This will never be '%other', but we need some
        // value in case none of the concrete values match.
        +__typename: "%other"
      |},
    |}>,
  |}
|};
export type EditUsersGroupMutation = {|
  variables: EditUsersGroupMutationVariables,
  response: EditUsersGroupMutationResponse,
|};
*/


/*
mutation EditUsersGroupMutation(
  $input: EditUsersGroupInput!
) {
  editUsersGroup(input: $input) {
    id
    name
    description
    status
    members {
      id
      authID
      firstName
      lastName
      email
      status
      role
    }
    policies {
      id
      name
      description
      isGlobal
      policy {
        __typename
        ... on InventoryPolicy {
          read {
            isAllowed
          }
          location {
            create {
              isAllowed
            }
            update {
              isAllowed
              locationTypeIds
            }
            delete {
              isAllowed
            }
          }
          equipment {
            create {
              isAllowed
            }
            update {
              isAllowed
            }
            delete {
              isAllowed
            }
          }
          equipmentType {
            create {
              isAllowed
            }
            update {
              isAllowed
            }
            delete {
              isAllowed
            }
          }
          locationType {
            create {
              isAllowed
            }
            update {
              isAllowed
            }
            delete {
              isAllowed
            }
          }
          portType {
            create {
              isAllowed
            }
            update {
              isAllowed
            }
            delete {
              isAllowed
            }
          }
          serviceType {
            create {
              isAllowed
            }
            update {
              isAllowed
            }
            delete {
              isAllowed
            }
          }
        }
        ... on WorkforcePolicy {
          read {
            isAllowed
            projectTypeIds
            workOrderTypeIds
          }
          templates {
            create {
              isAllowed
            }
            update {
              isAllowed
            }
            delete {
              isAllowed
            }
          }
          data {
            create {
              isAllowed
            }
            update {
              isAllowed
            }
            delete {
              isAllowed
            }
            assign {
              isAllowed
            }
            transferOwnership {
              isAllowed
            }
          }
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "EditUsersGroupInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isAllowed",
  "args": null,
  "storageKey": null
},
v6 = [
  (v5/*: any*/)
],
v7 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "create",
    "storageKey": null,
    "args": null,
    "concreteType": "BasicPermissionRule",
    "plural": false,
    "selections": (v6/*: any*/)
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "update",
    "storageKey": null,
    "args": null,
    "concreteType": "BasicPermissionRule",
    "plural": false,
    "selections": (v6/*: any*/)
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "delete",
    "storageKey": null,
    "args": null,
    "concreteType": "BasicPermissionRule",
    "plural": false,
    "selections": (v6/*: any*/)
  }
],
v8 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "editUsersGroup",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UsersGroup",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "members",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "authID",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "firstName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "lastName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          },
          (v4/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "role",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "policies",
        "storageKey": null,
        "args": null,
        "concreteType": "PermissionsPolicy",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isGlobal",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "policy",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "__typename",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "type": "InventoryPolicy",
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "read",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "BasicPermissionRule",
                    "plural": false,
                    "selections": (v6/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "location",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "LocationCUD",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "create",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "LocationPermissionRule",
                        "plural": false,
                        "selections": (v6/*: any*/)
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "update",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "LocationPermissionRule",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "locationTypeIds",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "delete",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "LocationPermissionRule",
                        "plural": false,
                        "selections": (v6/*: any*/)
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "equipment",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CUD",
                    "plural": false,
                    "selections": (v7/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "equipmentType",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CUD",
                    "plural": false,
                    "selections": (v7/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "locationType",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CUD",
                    "plural": false,
                    "selections": (v7/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "portType",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CUD",
                    "plural": false,
                    "selections": (v7/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "serviceType",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CUD",
                    "plural": false,
                    "selections": (v7/*: any*/)
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "WorkforcePolicy",
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "read",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "WorkforcePermissionRule",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "projectTypeIds",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "workOrderTypeIds",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "templates",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CUD",
                    "plural": false,
                    "selections": (v7/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "data",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "WorkforceCUD",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "create",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "WorkforcePermissionRule",
                        "plural": false,
                        "selections": (v6/*: any*/)
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "update",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "WorkforcePermissionRule",
                        "plural": false,
                        "selections": (v6/*: any*/)
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "delete",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "WorkforcePermissionRule",
                        "plural": false,
                        "selections": (v6/*: any*/)
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "assign",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "WorkforcePermissionRule",
                        "plural": false,
                        "selections": (v6/*: any*/)
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "transferOwnership",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "WorkforcePermissionRule",
                        "plural": false,
                        "selections": (v6/*: any*/)
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EditUsersGroupMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v8/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "EditUsersGroupMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v8/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "EditUsersGroupMutation",
    "id": null,
    "text": "mutation EditUsersGroupMutation(\n  $input: EditUsersGroupInput!\n) {\n  editUsersGroup(input: $input) {\n    id\n    name\n    description\n    status\n    members {\n      id\n      authID\n      firstName\n      lastName\n      email\n      status\n      role\n    }\n    policies {\n      id\n      name\n      description\n      isGlobal\n      policy {\n        __typename\n        ... on InventoryPolicy {\n          read {\n            isAllowed\n          }\n          location {\n            create {\n              isAllowed\n            }\n            update {\n              isAllowed\n              locationTypeIds\n            }\n            delete {\n              isAllowed\n            }\n          }\n          equipment {\n            create {\n              isAllowed\n            }\n            update {\n              isAllowed\n            }\n            delete {\n              isAllowed\n            }\n          }\n          equipmentType {\n            create {\n              isAllowed\n            }\n            update {\n              isAllowed\n            }\n            delete {\n              isAllowed\n            }\n          }\n          locationType {\n            create {\n              isAllowed\n            }\n            update {\n              isAllowed\n            }\n            delete {\n              isAllowed\n            }\n          }\n          portType {\n            create {\n              isAllowed\n            }\n            update {\n              isAllowed\n            }\n            delete {\n              isAllowed\n            }\n          }\n          serviceType {\n            create {\n              isAllowed\n            }\n            update {\n              isAllowed\n            }\n            delete {\n              isAllowed\n            }\n          }\n        }\n        ... on WorkforcePolicy {\n          read {\n            isAllowed\n            projectTypeIds\n            workOrderTypeIds\n          }\n          templates {\n            create {\n              isAllowed\n            }\n            update {\n              isAllowed\n            }\n            delete {\n              isAllowed\n            }\n          }\n          data {\n            create {\n              isAllowed\n            }\n            update {\n              isAllowed\n            }\n            delete {\n              isAllowed\n            }\n            assign {\n              isAllowed\n            }\n            transferOwnership {\n              isAllowed\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '34078eb6c09ee4ce62f28cd37509f647';
module.exports = node;
