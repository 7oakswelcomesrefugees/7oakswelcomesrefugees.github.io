#!/usr/bin/env python2
# -*- coding: utf-8 -*-
"""
Created on Thu Apr 30 13:51:26 2020

@author: samwestlake
"""

import os
import json

filenames=[]
for filename in os.listdir("/Users/samwestlake/Google Drive/Sevenoaks Refugees/SWR Website Content/SWR Website - Public Backend Files/7oakswelcomesrefugees.github.io/CookieCursor/"):
    if filename.endswith(".png"): 
        filenames.append(filename);
filenames = sorted(filenames)
print(filenames)

data = {}
data['filenames']=filenames;
print(data)

with open('data.json', 'w') as outfile:
    json.dump(data, outfile)