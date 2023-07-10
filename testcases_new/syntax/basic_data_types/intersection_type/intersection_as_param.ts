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

function interParam(carShip: Car & Ship) {
    carShip.driveOnRoad();
    carShip.driveInWater();
}

export function testUnionParam() {
    let carShip: Car & Ship = <Car & Ship>{};

    interParam(carShip);
}