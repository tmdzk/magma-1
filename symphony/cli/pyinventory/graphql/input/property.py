#!/usr/bin/env python3
# @generated AUTOGENERATED file. Do not Change!

from dataclasses import dataclass
from datetime import datetime
from functools import partial
from gql.gql.datetime_utils import DATETIME_FIELD
from numbers import Number
from typing import Any, Callable, List, Mapping, Optional

from dataclasses_json import DataClassJsonMixin

@dataclass
class PropertyInput(DataClassJsonMixin):
    propertyTypeID: str
    id: Optional[str] = None
    stringValue: Optional[str] = None
    intValue: Optional[int] = None
    booleanValue: Optional[bool] = None
    floatValue: Optional[Number] = None
    latitudeValue: Optional[Number] = None
    longitudeValue: Optional[Number] = None
    rangeFromValue: Optional[Number] = None
    rangeToValue: Optional[Number] = None
    nodeIDValue: Optional[str] = None
    isEditable: Optional[bool] = None
    isInstanceProperty: Optional[bool] = None

