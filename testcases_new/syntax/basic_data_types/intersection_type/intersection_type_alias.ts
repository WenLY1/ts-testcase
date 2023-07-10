/*
 * Copyright (C) 2023 Xiaomi Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

class Car {
    driveOnRoad() {
        console.log("drive on road");
    }
}

class Ship {
    driveInWater() {
        console.log("drive in water");
    }
}

type CarShip = Car & Ship;

export function interTypeAlias() {
    let carShip: CarShip = <Car & Ship>{};

    carShip.driveOnRoad();
    carShip.driveInWater();
}