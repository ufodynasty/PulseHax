window.addEventListener("SetupComplete", function() {

langs[langSel].edit_select_item_selectBetween = "Select All In-between";
langs[langSel].edit_select_item_selectBetween_sub = "Selects all beats in between the first selected beat and last selected beat.";

hr.field.draw = function(A) {
    var e = St.bpmNew();
    St.lastDraw = millis(),
    background(0, 0, 0, 255),
    imageMode(CORNER),
    Dt(0 < Bt.settings.defaultBackground.length ? Jt(Bt.settings.defaultBackground) : xt.bg, "zoom", 0, 0, width, height),
    !1 !== St.bg && "https://i.imgur.com/pUovCs5.png" !== St.bg && "" !== St.bg && Dt(Jt(St.bg), "zoom", (width - (width / 1920 > height / 1080 ? 1920 / 1080 * height : width)) / 2, (height - (width / 1920 > height / 1080 ? height : .5625 * width)) / 2, width / 1920 > height / 1080 ? 1920 / 1080 * height : width, width / 1920 > height / 1080 ? height : .5625 * width),
    colorMode(HSB),
    fill(St.effected.backgroundOverlayColor, St.effected.backgroundOverlaySaturation, St.effected.backgroundOverlayBrightness, St.effected.backgroundOverlayAlpha),
    noStroke(),
    rect(0, 0, width, height),
    colorMode(RGB),
    fill(0, Bt.settings.bgDim / 100 * 255),
    rectMode(CORNER),
    rect(0, 0, width, height),
    rectMode(CORNER),
    fill(255, St.transBackA),
    rect(0, 0, width, height),
    colorMode(HSB);
    for (var t = A.length - 1; 0 <= t; t--) {
        var i = A[t]
          , o = (push(),
        0)
          , n = 0
          , F = 0
          , X = width
          , D = 0
          , W = height
          , r = (width / 1920 > height / 1080 ? (o = 1920 / 1080 * height / 240,
        n = height / 135,
        F = (width - 1920 / 1080 * height) / 2,
        X = width - (width - 1920 / 1080 * height) / 2) : (o = width / 240,
        n = .5625 * width / 135,
        D = (height - .5625 * width) / 2,
        W = height - (height - .5625 * width) / 2),
        St.board.str * (St.board.c / 64) * (St.board.h < St.board.w ? St.board.h / .75 : St.board.w / .75) / 2)
          , s = 0
          , h = 0
          , U = 0
          , a = 0
          , L = St.effected.tileH[St.beat[i][0]]
          , l = St.effected.tileW[St.beat[i][0]]
          , d = ceil(St.board.h * St.board.c / 4 * L + (r < r * L ? r / 2 * L : -r / 2 * L)) + 2.5
          , g = ceil(St.board.w * St.board.c / 4 * l + (r < r * l ? r / 2 * l : -r / 2 * l)) + 2.5
          , c = (St.board.w,
        St.board.c,
        St.board.w,
        St.board.c,
        1)
          , f = 1
          , u = 1
          , v = 1
          , K = 1
          , V = 1
          , M = 0
          , q = 0
          , m = 1
          , p = 1
          , b = 0
          , Z = 0
          , j = !1
          , s = St.board.w * St.board.c * 3 / 8 * (St.beat[i][0] % 3 - 1) + width / 2 + St.effected.tileX[St.beat[i][0]] * o
          , h = St.board.h * St.board.c * 3 / 8 * (floor(St.beat[i][0] / 3) - 1) + height / 2 + St.effected.tileY[St.beat[i][0]] * n
          , U = St.board.w * St.board.c * 3 / 8 * (St.beat[i][0] % 3 - 1) + width / 2 + St.effected.tileX[St.beat[i][0]] * o
          , a = St.board.h * St.board.c * 3 / 8 * (floor(St.beat[i][0] / 3) - 1) + height / 2 + St.effected.tileY[St.beat[i][0]] * n
          , c = 1
          , f = 1
          , u = 1
          , v = 1;
        switch (Z = St.time < St.beat[i][1] ? 0 : 1 === St.beat[i][5] && St.time < St.beat[i][1] + St.beat[i][6] ? 1 : 2) {
        default:
            b = 1 - (St.beat[i][1] - St.time) / St.ar;
            break;
        case 1:
            b = 1 - (St.beat[i][1] + St.beat[i][6] - St.time) / St.beat[i][6];
            break;
        case 2:
            b = (St.time - (St.beat[i][1] + (1 === St.beat[i][5] ? St.beat[i][6] : 0))) / St.ar
        }
        switch (Z) {
        default:
            switch (St.beat[i][13]) {
            default:
                u = c = 0,
                v = f = 1;
                break;
            case 1:
                h = D - d / 2,
                m = 0,
                p = 8;
                break;
            case 7:
                s = St.board.w * St.board.c * 3 / 8 * (u = c = 0) + width / 2 + St.effected.tileX[4] * o,
                h = St.board.h * St.board.c * 3 / 8 * (floor(4 / 3) - 1) + height / 2 + St.effected.tileY[4] * n;
                break;
            case 3:
                K = 0;
                break;
            case 4:
                h = W + d / 2,
                m = 0,
                p = 8;
                break;
            case 5:
                s = F - g / 2,
                m = 0,
                p = 8;
                break;
            case 6:
                s = X + g / 2,
                m = 0,
                p = 8;
                break;
            case 2:
                u = c = 0,
                s = width / 2,
                h = height / 2;
                break;
            case 8:
                u = c = 0,
                s -= g / 2,
                h -= d / 2;
                break;
            case 9:
                u = c = 0,
                s += g / 2,
                h -= d / 2;
                break;
            case 10:
                u = c = 0,
                s -= g / 2,
                h += d / 2;
                break;
            case 11:
                u = c = 0,
                s += g / 2,
                h += d / 2;
                break;
            case 12:
                c = 0;
                break;
            case 13:
                u = 0;
                break;
            case 14:
                u = c = 0,
                M = -82.5;
                break;
            case 15:
                j = !0,
                v = f = 0
            }
        case 1:
            break;
        case 2:
            switch (St.beat[i][14]) {
            default:
                v = f = 0;
                break;
            case 1:
                a = lerp(D - d / 2, h, 2),
                m = 8,
                p = 0;
                break;
            case 7:
                U = lerp(St.board.w * St.board.c * 3 / 8 * 0 + width / 2 + St.effected.tileX[4] * o, s, 2),
                a = lerp(St.board.h * St.board.c * 3 / 8 * (floor(4 / 3) - 1) + height / 2 + St.effected.tileY[4] * n, h, 2),
                v = f = 2,
                m = 8,
                p = 0;
                break;
            case 3:
                K = 1,
                V = 0;
                break;
            case 4:
                a = lerp(W + d / 2, h, 2),
                m = 8,
                p = 0;
                break;
            case 5:
                U = lerp(F - g / 2, s, 2),
                m = 8,
                p = 0;
                break;
            case 6:
                U = lerp(X + g / 2, s, 2),
                m = 8,
                p = 0;
                break;
            case 2:
                v = f = 2,
                U = lerp(width / 2, s, 2),
                a = lerp(height / 2, h, 2);
                break;
            case 8:
                v = f = 0,
                U -= g / 2,
                a -= d / 2;
                break;
            case 9:
                v = f = 0,
                U += g / 2,
                a -= d / 2;
                break;
            case 10:
                v = f = 0,
                U -= g / 2,
                a += d / 2;
                break;
            case 11:
                v = f = 0,
                U += g / 2,
                a += d / 2;
                break;
            case 12:
                f = 0;
                break;
            case 13:
                v = 0;
                break;
            case 14:
                v = f = 0,
                q = 82.5
            }
        }
        noStroke();
        var w = color(St.beat[i][11], void 0 === St.beat[i][16] ? 255 : St.beat[i][16], void 0 === St.beat[i][17] ? 255 : St.beat[i][17])
          , G = lerp(75, 255, Bt.settings.noteEdgeOpacity / 100) * St.effected.boardA * St.effected.tileA[St.beat[i][0]]
          , Y = lerp(0, 255, Bt.settings.holdProgressOpacity / 100) * St.effected.boardA * St.effected.tileA[St.beat[i][0]]
          , J = lerp(0, 255, Bt.settings.notePaneOpacity / 100) * St.effected.boardA * St.effected.tileA[St.beat[i][0]]
          , _ = (rectMode(CENTER),
        ellipseMode(CENTER),
        1)
          , L = (St.mods.hidden && (1 === St.beat[i][5] ? 1 !== Z && 2 !== Z || (_ = 1 - constrain((St.time - St.beat[i][1]) / (St.beat[i][6] / 3 * 2), 0, 1)) : _ = constrain((St.beat[i][1] - St.time - St.ar / 3) / (St.ar / 3 * 2), 0, 1)),
        -1 !== St.selectedBeats.indexOf(i) && (colorMode(RGB),
        stroke(255, 175, 0, (175 - Bt.settings.noteEdgeOpacity) * (St.mods.hidden ? abs((St.beat[i][1] - St.time) / St.ar) : 1)),
        strokeWeight(Rt / 2),
        colorMode(HSB)),
        translate(width / 2, height / 2),
        translate(St.effected.boardX * o, St.effected.boardY * n),
        scale(St.effected.boardW, St.effected.boardH),
        rotate(St.effected.boardR),
        translate(-width / 2, -height / 2),
        translate(0 === lerp(h, a, b) ? 0 : lerp(s, U, b), lerp(h, a, b)),
        j || scale(0 === lerp(u, v, b) ? 0 : lerp(c, f, b), lerp(u, v, b)),
        rotate(lerp(M, q, b)),
        rotate(St.effected.tileR[St.beat[i][0]]),
        scale(1 - St.tilePressDis[St.beat[i][0]] * (Bt.settings.tilePush / 10 * .15)),
        1 - constrain((St.time - St.beat[i][8] - St.beat[i][1]) / St.beat[i][6], 0, 1))
          , $ = 1 === St.beat[i][5] ? constrain((St.edit ? St.time - St.beat[i][1] : St.beat[i][8]) / St.beat[i][6], 0, St.edit ? 1 : L) : 0
          , r = 1 !== Z ? lerp(c, f, b) / (f < c ? c : f) : 1
          , l = floor(width < height ? width : height) / 64 / r
          , L = lerp(Bt.settings.holdThickness, Bt.settings.holdProgressThickness, _);
        beatBorderWidth = lerp(.375 * l, 6 * l, (Bt.settings.beatThickness - 1) / 9),
        holdBorderWidth = lerp(.375 * l, 6 * l, (Bt.settings.holdThickness - 1) / 9),
        progBorderWidth = lerp(.375 * l, 6 * l, (L - 1) / 9);
        var C, ee, te, r = (r = (g < d ? g - beatBorderWidth : d - beatBorderWidth) / beatBorderWidth) < 0 ? 1 + r : 1, l = (l = (g < d ? g - holdBorderWidth : d - holdBorderWidth) / holdBorderWidth) < 0 ? 1 + l : 1, L = (L = (g < d ? g - progBorderWidth : d - progBorderWidth) / progBorderWidth) < 0 ? 1 + L : 1, ie = r * beatBorderWidth, oe = holdBorderWidth * l, ne = progBorderWidth * L;
        switch (St.beat[i][5]) {
        default:
            !0 !== j ? (strokeWeight(ie),
            rectMode(CENTER),
            C = g - beatBorderWidth <= 1 ? 1 : g - beatBorderWidth,
            ee = d - beatBorderWidth <= 1 ? 1 : d - beatBorderWidth,
            fill(w, J * _ * lerp(K, V, b) * constrain(lerp(m, p, b), 0, 1)),
            noStroke(),
            rect(0, 0, Math.max(C - ie, 0), Math.max(ee - ie, 0)),
            noFill(),
            stroke(w, G * _ * lerp(K, V, b) * constrain(lerp(m, p, b), 0, 1)),
            rect(0, 0, C, ee),
            -1 !== St.selectedBeats.indexOf(i) && (stroke(29, 255, 255),
            rect(0, 0, (g - beatBorderWidth <= 1 ? 1 : g - beatBorderWidth) + ie, (d - beatBorderWidth <= 1 ? 1 : d - beatBorderWidth) + ie))) : (C = createGraphics(Ot(g), Ot(d), P2D),
            ee = lerp(c, f, b) * g,
            re = lerp(u, v, b) * d,
            0,
            y = ceil((Ot(g) - ee) / 2),
            se = ceil((Ot(d) - re) / 2),
            te = G * lerp(K, V, b) * constrain(lerp(m, p, b), 0, 1),
            C.rectMode(CORNER),
            C.fill((St.beat[i][11] - lerp(3, 0, b)) % 255, 255, 255, te),
            C.rect(0, 0, y, Ot(d) - se),
            C.fill((St.beat[i][11] - lerp(1, 0, b)) % 255, 255, 255, te),
            C.rect(0 + y, 0, Ot(g) - y, se),
            C.fill((St.beat[i][11] + lerp(1, 0, b)) % 255, 255, 255, te),
            C.rect(0 + y + ee, 0 + se, y, Ot(d) - se),
            C.fill((St.beat[i][11] + lerp(3, 0, b)) % 255, 255, 255, te),
            C.rect(0, 0 + se + re, Ot(g) - y, se),
            image(C, -g / 2, -d / 2));
            break;
        case 1:
            {
                strokeWeight(oe),
                noFill(),
                rotate(Bt.settings.holdAngle),
                scale(1 === Bt.settings.holdDirection ? -1 : 1, 1);
                const te = G * lerp(K, V, b) * constrain(lerp(m, p, b), 0, 1);
                var re = Y * lerp(K, V, b) * constrain(lerp(m, p, b), 0, 1)
                  , y = lerp(te, re, _)
                  , se = J * lerp(K, V, b) * constrain(lerp(m, p, b), 0, 1);
                let e = (St.time - St.beat[i][1]) / St.beat[i][6];
                var he = g - holdBorderWidth <= 1 ? 1 : g - holdBorderWidth
                  , ae = d - holdBorderWidth <= 1 ? 1 : d - holdBorderWidth
                  , le = g - progBorderWidth <= 1 ? 1 : g - progBorderWidth
                  , de = d - progBorderWidth <= 1 ? 1 : d - progBorderWidth
                  , ge = ((e = constrain(e, 0, 1)) < $ && (e = $),
                1 !== Z ? strokeCap(ROUND) : strokeCap(SQUARE),
                color(hue(w), saturation(w), lerp(brightness(w) / 255 * 200, brightness(w) / 255 * 100, constrain(3 * $, 0, 1))))
                  , ce = color(hue(w), saturation(w), lerp(100, 255, brightness(w) / 255))
                  , ge = lerpColor(ce, ge, _)
                  , fe = (fill(ge, se),
                noStroke(),
                arc(0, 0, he - oe, ae - oe, -90, 270),
                noFill(),
                stroke(ge, te),
                arc(0, 0, he, ae, 360 * e - 90, 270),
                strokeCap(SQUARE),
                push(),
                strokeWeight(ne),
                St.mods.hidden ? stroke(ce, y) : stroke(225, y),
                arc(0, 0, le, de, -90, 360 * (e - $) - 90),
                pop(),
                push(),
                strokeWeight(ne),
                stroke(ce, y),
                arc(0, 0, le, de, 360 * (e - $) - 90, 360 * e - 90),
                pop(),
                St.beat[i][6] / 60 * St.beat[i][9]);
                strokeWeight(oe),
                stroke((hue(w) + 239.0625) % 255, saturation(w), 255, te / 1.25);
                for (var ue = 0; ue < fe; ue++) {
                    push();
                    var ve = 360 / fe * ue - 90;
                    arc(0, 0, he, ae, ve - 5, 5 + ve),
                    pop()
                }
                -1 !== St.selectedBeats.indexOf(i) && (stroke(29, 255, 255),
                arc(0, 0, he + oe, ae + oe, -90, 270));
                break
            }
        }
        pop()
    }
    colorMode(RGB),
    push(),
    rectMode(CENTER),
    width / 1920 > height / 1080 ? translate(width / 2 + St.effected.boardX * (1920 / 1080 * height / 240), height / 2 + St.effected.boardY * (height / 135)) : translate(width / 2 + St.effected.boardX * (width / 240), height / 2 + St.effected.boardY * (.5625 * width / 135)),
    scale(St.effected.boardW, St.effected.boardH),
    rotate(St.effected.boardR);
    for (var me = St.board.w * St.board.c * 3 / 8, pe = St.board.h * St.board.c * 3 / 8, be = width / 1920 > height / 1080, we = Rt / 4 / 5 * Bt.settings.missShake, i = 0; i < 9; i++)
        St.time - St.tileTrailLast[i] >= St.effected.tileTrailSpacing[i] / 1e3 / 60 * 120 && (St.tileTrailLast[i] = St.time,
        void 0 === St.tileTrail[i] && (St.tileTrail[i] = []),
        push(),
        translate(me * (i % 3 - 1), pe * (floor(i / 3) - 1)),
        be ? translate(St.effected.tileX[i] * (1920 / 1080 * height / 240), St.effected.tileY[i] * (height / 135)) : translate(St.effected.tileX[i] * (width / 240), St.effected.tileY[i] * (.5625 * width / 135)),
        St.tileTrail[i].push({
            time: St.time,
            x: zt.get(1).x,
            y: zt.get(1).y,
            r: St.effected.tileR[i],
            w: St.effected.tileW[i],
            h: St.effected.tileH[i],
            a: St.effected.tileA[i],
            hue: St.effected.tileColor[i],
            saturation: St.effected.tileSaturation[i],
            brightness: St.effected.tileBrightness[i],
            alpha: St.effected.tileAlpha[i],
            overlayHue: St.effected.tileOverlayColor[i],
            overlaySaturation: St.effected.tileOverlaySaturation[i],
            overlayBrightness: St.effected.tileOverlayBrightness[i],
            overlayAlpha: St.effected.tileOverlayAlpha[i],
            rememberColor: St.effected.tileTrailColor[i]
        }),
        10 < St.tileTrail[i].length && (St.tileTrail[i] = St.tileTrail[i].splice(St.tileTrail[i].length - 10, 10)),
        pop());
    for (i = 0; i < 9; i++) {
        var Ce = constrain(ceil(St.effected.tileTrailLength[i]), 0, 10)
          , ye = constrain(St.effected.tileTrailLength[i], 0, 10) - Ce
          , Ee = {};
        Ee = be ? {
            x: St.effected.tileX[i] * (1920 / 1080 * height / 240) + me * (i % 3 - 1),
            y: St.effected.tileY[i] * (height / 135) + pe * (floor(i / 3) - 1),
            r: St.effected.tileR[i],
            w: St.effected.tileW[i],
            h: St.effected.tileH[i],
            a: St.effected.tileA[i],
            hue: St.effected.tileColor[i],
            saturation: St.effected.tileSaturation[i],
            brightness: St.effected.tileBrightness[i],
            alpha: St.effected.tileAlpha[i],
            overlayHue: St.effected.tileOverlayColor[i],
            overlaySaturation: St.effected.tileOverlaySaturation[i],
            overlayBrightness: St.effected.tileOverlayBrightness[i],
            overlayAlpha: St.effected.tileOverlayAlpha[i],
            rememberColor: !1
        } : {
            x: St.effected.tileX[i] * (width / 240) + me * (i % 3 - 1),
            y: St.effected.tileY[i] * (.5625 * width / 135) + pe * (floor(i / 3) - 1),
            r: St.effected.tileR[i],
            w: St.effected.tileW[i],
            h: St.effected.tileH[i],
            a: St.effected.tileA[i],
            hue: St.effected.tileColor[i],
            saturation: St.effected.tileSaturation[i],
            brightness: St.effected.tileBrightness[i],
            alpha: St.effected.tileAlpha[i],
            overlayHue: St.effected.tileOverlayColor[i],
            overlaySaturation: St.effected.tileOverlaySaturation[i],
            overlayBrightness: St.effected.tileOverlayBrightness[i],
            overlayAlpha: St.effected.tileOverlayAlpha[i],
            rememberColor: !1
        };
        for (var Oe = Ce - 1; -1 <= Oe; Oe--) {
            if (0 <= Oe) {
                if (void 0 === St.tileTrail[i])
                    continue;
                var ze = St.tileTrail[i].length - Oe - 1;
                if (void 0 === St.tileTrail[i][ze])
                    continue;
                var E = St.tileTrail[i][ze]
                  , Pe = (1 - lerp(Oe, Oe + 1, (St.time - St.tileTrailLast[i]) / (St.effected.tileTrailSpacing[i] / 1e3 / 60 * 120)) / (Ce + ye)) * St.effected.tileTrailAlpha[i];
                if (E.x === Ee.x && E.y === Ee.y && E.r === Ee.r && E.w === Ee.w && E.h === Ee.h)
                    continue;
                if (E.time < St.effected.tileTrailDelete[i])
                    continue
            } else
                E = Ee,
                Pe = 1;
            E.rememberColor || (E.hue = St.effected.tileColor[i],
            E.saturation = St.effected.tileSaturation[i],
            E.brightness = St.effected.tileBrightness[i],
            E.alpha = St.effected.tileAlpha[i],
            E.overlayHue = St.effected.tileOverlayColor[i],
            E.overlaySaturation = St.effected.tileOverlaySaturation[i],
            E.overlayBrightness = St.effected.tileOverlayBrightness[i],
            E.overlayAlpha = St.effected.tileOverlayAlpha[i]),
            St.tilePressDis[i] += It(St.tilePressRelease[i] ? 0 : 1, St.tilePressDis[i], .4),
            St.tilePressDis[i] = Ot(1e4 * St.tilePressDis[i]) / 1e4,
            push(),
            strokeWeight(St.board.str * (St.board.c / 64) * St.missTiles[i][0] * (St.board.h < St.board.w ? St.board.h / .75 : St.board.w / .75)),
            colorMode(HSB),
            stroke(E.hue, E.saturation, E.brightness, E.alpha * St.effected.boardA * St.effected.tileA[i] * Pe),
            colorMode(RGB),
            translate(sin((1 - St.missTiles[i][0]) * (8 * Math.PI)) * we, 0),
            translate(E.x, E.y),
            rotate(E.r),
            scale(1 - St.tilePressDis[i] * (Bt.settings.tilePush / 10 * .15)),
            fill(0, 255 * (1 - +St.board.str) * St.effected.boardA * St.effected.tileA[i]);
            var xe, Be = (St.board.w * St.board.c / 4 + St.board.str * (St.board.c / 64)) * E.w, Se = (St.board.h * St.board.c / 4 + St.board.str * (St.board.c / 64)) * E.h, Te = (rect(0, 0, Be, Se),
            Bt.settings.boardOverlay / 100 * St.effected.boardA * E.a);
            0 < Te && (xe = 2 !== (!(xe = []) === Bt.settings.overlayText ? Bt.settings.keyboard : Bt.settings.overlayText) ? St.keyDisplay[Bt.settings.language] : St.keyDisplayNum,
            textAlign(CENTER, CENTER),
            colorMode(HSB),
            fill(E.overlayHue, E.overlaySaturation, E.overlayBrightness, E.overlayAlpha * Te * Pe),
            noStroke(),
            textSize((Be < Se ? Be : Se) / 1.5),
            text(xe[i], 0, 0)),
            pop()
        }
    }
    pop();
    o = 0,
    n = 0;
    n = width / 1920 > height / 1080 ? (o = 1920 / 1080 * height / 240,
    height / 135) : (o = width / 240,
    .5625 * width / 135);
    for (var i = St.newHits.length - 1; 0 <= i; i--) {
        var He, Re, Ne, ke, O = St.newHits[i], Qe = St.hitValues[O.type], b = (St.time - O.time) / (Bt.settings.hitParticlesDuration / 240 * St.mods.bpm);
        0 === O.type && Bt.settings.disableMarvelouses || 1 === O.type && Bt.settings.disableGreats || 2 === O.type && Bt.settings.disableGoods || 3 === O.type && Bt.settings.disableOks || 4 === O.type && Bt.settings.disableMisses || b < 1 && (He = St.board.w * St.board.c * 3 / 8 * (O.tile % 3 - 1) + width / 2 + St.effected.tileX[O.tile] * o,
        Ne = St.board.h * St.board.c * 3 / 8 * (floor(O.tile / 3) - 1) + height / 2 + St.effected.tileY[O.tile] * n,
        Re = St.board.w * St.board.c / 4 * (1 - abs(O.error)) * St.effected.tileW[O.tile],
        ke = St.board.h * St.board.c / 4 * (1 - abs(O.error)) * St.effected.tileH[O.tile],
        push(),
        rectMode(CENTER),
        translate(width / 2, height / 2),
        translate(St.effected.boardX * o, St.effected.boardY * n),
        scale(St.effected.boardW, St.effected.boardH),
        rotate(St.effected.boardR),
        translate(-width / 2, -height / 2),
        translate(He, Ne),
        rotate(St.effected.tileR[O.tile]),
        push(),
        He = (Re < ke ? Re : ke) / 3 * (Bt.settings.hitParticlesThickness / 5),
        Ne = .5 * sin(90 * b) + 1,
        Ne = (Re + He / 4) * (Re = lerp(Ne, lerp(Ne / 1.5, Ne, Bt.settings.hitParticlesSpread / 5), b)),
        ke = (ke + He / 4) * Re,
        stroke(Qe.color),
        drawingContext.globalAlpha = (.25 + .75 * (1 - b)) * (Bt.settings.hitParticlesOpacity / 100),
        strokeWeight(He * (1 - b)),
        noFill(),
        rectMode(CENTER),
        ellipseMode(CENTER),
        (1 === O.noteType ? ellipse : rect)(0, 0, Ne, ke),
        pop(),
        pop())
    }
    colorMode(HSB),
    fill(St.effected.foregroundOverlayColor, St.effected.foregroundOverlaySaturation, St.effected.foregroundOverlayBrightness, St.effected.foregroundOverlayAlpha),
    noStroke(),
    rect(0, 0, width, height),
    colorMode(RGB),
    push(),
    imageMode(CENTER),
    translate(width / 2, height / 2),
    image(xt.vignette, 0, 0, (width / 1920 > height / 1080 ? 1920 / 1080 * height : width) * (-pow(St.effected.vignette - 10, 3) / (pow(10, 3) / 14) + 1) + 8, (width / 1920 > height / 1080 ? height : .5625 * width) * (-pow(St.effected.vignette - 10, 3) / (pow(10, 3) / 14) + 1) + 8),
    resetMatrix(),
    rectMode(CORNER),
    fill(0),
    noStroke(),
    rect(0, 0, width, (height - (width / 1920 > height / 1080 ? height : .5625 * width) * (-pow(St.effected.vignette - 10, 3) / (pow(10, 3) / 14) + 1)) / 2),
    rect(0, height, width, -(height - (width / 1920 > height / 1080 ? height : .5625 * width) * (-pow(St.effected.vignette - 10, 3) / (pow(10, 3) / 14) + 1)) / 2),
    rect(0, 0, (width - (width / 1920 > height / 1080 ? 1920 / 1080 * height : width) * (-pow(St.effected.vignette - 10, 3) / (pow(10, 3) / 14) + 1)) / 2, height),
    rect(width, 0, -(width - (width / 1920 > height / 1080 ? 1920 / 1080 * height : width) * (-pow(St.effected.vignette - 10, 3) / (pow(10, 3) / 14) + 1)) / 2, height),
    pop(),
    push(),
    resetMatrix(),
    fill(0),
    rectMode(CORNER),
    noStroke(),
    H = width / 1920 > height / 1080 ? (R = 1920 / 1080 * height / 240,
    k = height / 135,
    T = width - 1920 / 1080 * height,
    0) : (R = width / 240,
    k = .5625 * width / 135,
    T = 0,
    height - .5625 * width),
    rect(0, 0, T / 2 + St.effected.letterboxX * R, height),
    rect(width, 0, -T / 2 - St.effected.letterboxX * R, height),
    rect(0, 0, width, H / 2 + St.effected.letterboxY * k),
    rect(0, height, width, -H / 2 - St.effected.letterboxY * k),
    pop();
    for (i = 0; i < St.effected.subtitles.length; i++) {
        var Ie, Ae, Fe, Xe, De, z = St.effected.subtitles[i], We = (push(),
        z.moveX = void 0 === z.moveX ? 0 : z.moveX,
        z.moveY = void 0 === z.moveY ? 0 : z.moveY,
        z.moveSize = void 0 === z.moveSize ? 0 : z.moveSize,
        z.posD = void 0 === z.posD ? 0 : z.posD,
        z.moveD = void 0 === z.moveD ? 0 : z.moveD,
        z.moveHighlightColor = void 0 === z.moveHighlightColor ? 0 : z.moveHighlightColor,
        z.transparency = void 0 === z.transparency ? 255 : z.transparency,
        z.moveTransparency = void 0 === z.moveTransparency ? 0 : z.moveTransparency,
        z.easeType = void 0 === z.easeType ? 0 : z.easeType,
        z.textDi = void 0 === z.textDi ? 0 : z.textDi,
        z.posX + Qt(St.time - z.time, z.moveTime, z.moveX, z.easeType)), Ue = z.posY + Qt(St.time - z.time, z.moveTime, z.moveY, z.easeType), Le = z.size + Qt(St.time - z.time, z.moveTime, z.moveSize, z.easeType), Ke = z.posD + Qt(St.time - z.time, z.moveTime, z.moveD, z.easeType), P = z.highlightColor, Ve = z.highlightSaturation, Me = z.highlightBrightness, qe = z.highlightAlpha, x = z.backgroundColor, Ze = z.backgroundSaturation, je = z.backgroundBrightness, Ge = z.backgroundAlpha, B = (P = (P %= 255) < 0 ? 255 + P : P,
        x = (x %= 255) < 0 ? 255 + x : x,
        Le = Le < 0 ? 0 : Le,
        Qt(St.time - z.time, z.moveTime, 1, z.easeType)), B = (colorMode(HSB),
        qe = !0 === z.targetHighlightSmooth ? (colorMode(HSB),
        Ie = color(P, Ve, Me, qe),
        Ae = color(z.targetHighlightColor, z.targetHighlightSaturation, z.targetHighlightBrightness, z.targetHighlightAlpha),
        colorMode(RGB),
        Fe = lerpColor(Ie, Ae, B),
        P = hue(Fe),
        Ve = saturation(Fe),
        Me = brightness(Fe),
        alpha(Fe)) : (void (Xe = 0) !== z.targetHighlightLoops && (Xe = 255 * z.targetHighlightLoops),
        P = (P = lerp(P, z.targetHighlightColor + Xe, B) % 255) < 0 ? 255 + P : P,
        Ve = lerp(Ve, z.targetHighlightSaturation, B),
        Me = lerp(Me, z.targetHighlightBrightness, B),
        lerp(qe, z.targetHighlightAlpha, B)),
        Ge = !0 === z.targetBackgroundSmooth ? (colorMode(HSB),
        Ie = color(x, Ze, je, Ge),
        Ae = color(z.targetBackgroundColor, z.targetBackgroundSaturation, z.targetBackgroundBrightness, z.targetBackgroundAlpha),
        colorMode(RGB),
        Fe = lerpColor(Ie, Ae, B),
        x = hue(Fe),
        Ze = saturation(Fe),
        je = brightness(Fe),
        alpha(Fe)) : (void (Xe = 0) !== z.targetBackgroundLoops && (Xe = 255 * z.targetBackgroundLoops),
        x = (x = lerp(x, z.targetBackgroundColor + Xe, B) % 255) < 0 ? 255 + x : x,
        Ze = lerp(Ze, z.targetBackgroundSaturation, B),
        je = lerp(je, z.targetBackgroundBrightness, B),
        lerp(Ge, z.targetBackgroundAlpha, B)),
        colorMode(HSB),
        0), Ye = 0;
        if (isNaN(P) && (P = 141),
        isNaN(x) && (P = 141),
        Ye = (width / 1920 > height / 1080 ? (translate(We * (1920 / 1080 * height / 240) + (width - 1920 / 1080 * height) / 2, Ue * (height / 135)),
        B = Ot(Le * (height / 135)),
        1920 / 1080 * height / 240) : (translate(We * (width / 240), Ue * (.5625 * width / 135) + (height - .5625 * width) / 2),
        B = Ot(Le * (.5625 * width / 135)),
        width / 240),
        B),
        textSize(B),
        textLeading(Ye),
        rotate(Ke),
        void 0 !== z.text) {
            var S = z.text
              , Je = z.highlight
              , _e = !1
              , $e = !1;
            switch (z.textDi) {
            case 1:
                S = (S = (S = S.split("")).reverse()).join(""),
                $e = !0;
                break;
            case 2:
                S = (S = S.split("")).join("\n"),
                Je *= 2,
                _e = !0;
                break;
            case 3:
                S = (S = (S = S.split("")).reverse()).join("\n"),
                Je *= 2,
                $e = _e = !0
            }
            if (De = Fi(S, B, Ye),
            _e)
                switch (St.effected.subtitles[i].textAl) {
                default:
                    textAlign(LEFT, TOP);
                    break;
                case 1:
                    textAlign(CENTER, TOP);
                    break;
                case 2:
                    textAlign(RIGHT, TOP);
                    break;
                case 3:
                    textAlign(LEFT, TOP),
                    translate(0, Ot(-De / 2));
                    break;
                case 4:
                    textAlign(CENTER, TOP),
                    translate(0, Ot(-De / 2));
                    break;
                case 5:
                    textAlign(RIGHT, TOP),
                    translate(0, Ot(-De / 2));
                    break;
                case 6:
                    textAlign(LEFT, TOP),
                    translate(0, Ot(-De));
                    break;
                case 7:
                    textAlign(CENTER, TOP),
                    translate(0, Ot(-De));
                    break;
                case 8:
                    textAlign(RIGHT, TOP),
                    translate(0, Ot(-De))
                }
            else
                switch (St.effected.subtitles[i].textAl) {
                default:
                    textAlign(LEFT, TOP),
                    translate(0, 0);
                    break;
                case 1:
                    textAlign(LEFT, TOP),
                    translate(Ot(-textWidth(St.effected.subtitles[i].text) / 2), 0);
                    break;
                case 2:
                    textAlign(LEFT, TOP),
                    translate(Ot(-textWidth(St.effected.subtitles[i].text)), 0);
                    break;
                case 3:
                    textAlign(LEFT, CENTER);
                    break;
                case 4:
                    textAlign(LEFT, CENTER),
                    translate(Ot(-textWidth(St.effected.subtitles[i].text) / 2), 0);
                    break;
                case 5:
                    textAlign(LEFT, CENTER),
                    translate(Ot(-textWidth(St.effected.subtitles[i].text)), 0);
                    break;
                case 6:
                    textAlign(LEFT, BOTTOM);
                    break;
                case 7:
                    textAlign(LEFT, BOTTOM),
                    translate(Ot(-textWidth(St.effected.subtitles[i].text) / 2), 0);
                    break;
                case 8:
                    textAlign(LEFT, BOTTOM),
                    translate(Ot(-textWidth(St.effected.subtitles[i].text)), 0)
                }
            $e && (Je = abs(S.length - (constrain(Je, 0, S.length + (_e ? 1 : 0)) - (_e ? 1 : 0)))),
            Je = constrain(Je, 0, S.length),
            colorMode(HSB);
            We = color(x, Ze, je, Ge),
            Ue = color(P, Ve, Me, qe),
            Le = (fill($e ? Ue : We),
            _e ? Ot(Fi(S.substr(0, Je), B, Ye)) : 0);
            text(S.substr(Je, S.length), _e ? 0 : Ot(textWidth(S.substr(0, Je))), 0 < Le ? Le + Ye / 2 - textDescent() : 0),
            fill($e ? We : Ue),
            text(S.substr(0, Je), 0, 0)
        }
        pop(),
        colorMode(RGB)
    }
    if (St.mods.flashlight && (push(),
    width / 1920 > height / 1080 ? translate(width / 2 + St.effected.boardX * (1920 / 1080 * height / 240), height / 2 + St.effected.boardY * (height / 135)) : translate(width / 2 + St.effected.boardX * (width / 240), height / 2 + St.effected.boardY * (.5625 * width / 135)),
    rotate(St.effected.boardR),
    scale(St.effected.boardW, St.effected.boardH),
    St.flashlightX += It(St.board.w * St.board.c * 3 / 8 * (St.lastHitTile % 3 - 1), St.flashlightX, .2),
    St.flashlightY += It(St.board.h * St.board.c * 3 / 8 * (floor(St.lastHitTile / 3) - 1), St.flashlightY, .2),
    translate(St.flashlightX, St.flashlightY),
    width / 1920 > height / 1080 ? translate(St.effected.tileX[St.lastHitTile] * (1920 / 1080 * height / 240), St.effected.tileY[St.lastHitTile] * (height / 135)) : translate(St.effected.tileX[St.lastHitTile] * (width / 240), St.effected.tileY[St.lastHitTile] * (.5625 * width / 135)),
    noFill(),
    stroke(0),
    strokeWeight(width),
    ellipse(0, 0, St.board.w * St.board.c / 4 * St.effected.tileW[St.lastHitTile] * 4 + width, St.board.h * St.board.c / 4 * St.effected.tileH[St.lastHitTile] * 4 + width, St.flashlightY),
    pop()),
    push(),
    resetMatrix(),
    fill(0),
    rectMode(CORNER),
    noStroke(),
    width / 1920 > height / 1080 ? (rect(0, 0, (width - 1920 / 1080 * height) / 2, height),
    rect(width, height, -(width - 1920 / 1080 * height) / 2, -height)) : height / 1080 > width / 1920 && (rect(0, 0, width, (height - .5625 * width) / 2),
    rect(width, height, -width, -(height - .5625 * width) / 2)),
    pop(),
    !1 === St.edit) {
        St.headerY += It(0, St.headerY, .2),
        St.showGUI ? St.guiAlpha += It(1, St.guiAlpha, .3) : St.guiAlpha += It(0, St.guiAlpha, .3),
        rectMode(CORNER),
        noStroke();
        for (var T = Ot(lerp(width / 16, width / 2, (Bt.settings.headerWidth - 1) / 9)), et = (push(),
        translate(width / 2 - T / 2, 0),
        Bt.settings.showProgress ? (R = Ot(constrain(St.time / St.timeEnd, 0, 1) * T),
        fill(40, 150 * St.guiAlpha),
        rect(R, 0, T - R, height / 32),
        fill(150, 150 * St.guiAlpha),
        rect(0, 0, R, height / 32)) : (Bt.settings.showAccuracy || Bt.settings.showHP) && (fill(40, 150 * St.guiAlpha),
        rect(0, 0, T, height / 32)),
        pop(),
        0), i = St.acc = 0; i < St.hitValues.length; i++)
            isNaN(St.hitStats[i]) && (St.hitStats[i] = 0),
            St.acc += St.hitValues[i].acc * St.hitStats[i],
            et += St.hitStats[i];
        0 < et ? St.acc /= et : St.acc = 100,
        St.accDis += It(St.acc, St.accDis, .35),
        St.scoreFinal = ji(St.newScore.log),
        St.scoreDis += It(St.scoreFinal * pn(St.mods, !0), St.scoreDis, .35);
        var H = St.accDis.toFixed(3) + "%";
        if (Bt.settings.showAccuracy && (textAlign(CENTER, CENTER),
        fill(255, 200 * St.guiAlpha),
        textSize(height / 32 / 1.5),
        text(H, width / 2, height / 32 / 2)),
        St.hp = constrain(St.hp, 0, 100),
        St.hpDis += It(St.hp, St.hpDis, .2),
        Bt.settings.showHP && (k = pow(St.hpDis / 100, 1),
        fill(lerpColor(color(255, 0, 0, 200 * St.guiAlpha), color(255, 200 * St.guiAlpha), k)),
        rect(width / 2 - T / 2, height / 32, T * (St.hpDis / 100), lerp(height / 64, height / 512, k))),
        Bt.settings.showUR) {
            push(),
            translate(width / 2, height / 32 * 2),
            rectMode(CENTER);
            for (i = St.newHits.length - 1; 0 <= i; i--) {
                var O = St.newHits[i]
                  , Qe = St.hitValues[O.type];
                1 <= (St.time - O.time) / 5 && St.newHits.splice(i, 1),
                fill(Qe.color, lerp(200 * St.guiAlpha, 0, (St.time - O.time) / 5)),
                rect(O.error / St.hitValues[St.hitValues.length - 1].timing * (width / 16 / 2), 0, width / 1024, height / 64)
            }
            pop()
        }
        textAlign(CENTER, CENTER),
        Bt.settings.showJudgements && 0 < St.newHits.length && (O = St.newHits[St.newHits.length - 1],
        Qe = St.hitValues[O.type],
        fill(Qe.color, lerp(200 * St.guiAlpha, 0, (St.time - O.time) / 5)),
        textSize(lerp(height / 64 * 1.25, height / 64, constrain((St.time - O.time) / 3, 0, 1))),
        text(Qe.name, width / 2, height / 32 * 1.5));
        var R = "";
        if (St.mods.auto ? R = Et("game_replayHeader", Pt, "Pulsus", St.title, void 0 === Wt(St.author, "uuid").user ? Et("defaultUsername", Pt) : Wt(St.author, "uuid").user, Ot(100 * St.stars) / 100, Lo(St.mods)) : St.replay.on && (R = Et("game_replayHeader", Pt, Wt(St.replay.user, "uuid").user, St.title, void 0 === Wt(St.author, "uuid").user ? Et("defaultUsername", Pt) : Wt(St.author, "uuid").user, Ot(100 * St.stars) / 100, Lo(St.mods))),
        0 < R.length && (textSize(height / 32 / 1.5),
        rectMode(CENTER),
        fill(40, 150 * St.guiAlpha),
        rect(width / 2, height - height / 32 / 2, textWidth(R) + (height / 32 - height / 32 / 1.5), height / 32),
        textAlign(CENTER, CENTER),
        fill(255, 200 * St.guiAlpha),
        text(R, width / 2, height - height / 32 / 2)),
        Bt.settings.showScore && (textAlign(RIGHT, TOP),
        fill(255, 200 * St.guiAlpha),
        textSize(height / 16 / 1.5),
        text(Ot(St.scoreDis), width - height / 32, height / 32)),
        Bt.settings.showCombo && (textAlign(LEFT, BOTTOM),
        fill(255, 200 * St.guiAlpha),
        0 < St.newHits.length ? (O = St.newHits[St.newHits.length - 1],
        textSize(lerp(height / 16, height / 16 / 1.5, Math.sin(constrain(St.time - O.time, 0, 1) * Math.PI / 2)))) : textSize(height / 16 / 1.5),
        text(St.combo + "x", height / 32, height - height / 32)),
        Bt.settings.showSections && 0 <= St.sections.length) {
            rectMode(CORNER);
            for (var tt = !1, i = St.sections.length - 1; 0 <= i; i--) {
                var it = St.sections[i];
                if (St.time > it.time) {
                    tt = i;
                    break
                }
            }
            textAlign(LEFT, CENTER);
            for (var H = height / 24, T = (textSize(H / 1.5),
            0), ot = (!1 !== tt ? (k = St.sections[tt],
            St.sectionBarWidth += It(textWidth(k.name) + (H - H / 1.5), St.sectionBarWidth, .2),
            St.sectionCarouselIndex += It(tt + 1, St.sectionCarouselIndex, .2),
            T = Ot(constrain((St.time - k.time) / ((tt === St.sections.length - 1 ? St.timeEnd : St.sections[tt + 1].time) - k.time), 0, 1) * St.sectionBarWidth)) : (St.sectionBarWidth += It(0, St.sectionBarWidth, .2),
            St.sectionCarouselIndex += It(0, St.sectionCarouselIndex, .2)),
            [""]), i = 0; i < St.sections.length; i++)
                ot.push({
                    text: St.sections[i].name,
                    color: color(255, 200 * St.guiAlpha)
                });
            fill(40, 150 * St.guiAlpha),
            rect(T + Rt, Rt, Ot(St.sectionBarWidth) - T, H),
            fill(150, 150 * St.guiAlpha),
            rect(Rt, Rt, T, H),
            Xn((H - H / 1.5) / 2 + Rt, H / 2 + Rt, H / 1.5, 1, St.sectionCarouselIndex, ot)
        }
    }
    if (!0 === St.edit) {
        var N = Qn();
        if (0 === St.editorMode && (St.showGUI = !0),
        St.showGUI) {
            St.headerY += It(0, St.headerY, .2),
            mouseY < height / 16 * St.headerY + height / 16 * (St.headerH + 1) && "scroll" === St.timelineMode && !St.menu ? (St.headerH += It(1, St.headerH, .2),
            mouseIsPressed && (St.time = Ot(St.timeEnd / width * mouseX * 4 * e) / 4 / e + St.bpm / 60 / 1e3 * St.timelineOffset,
            St.timeScroll = St.time,
            !0 === St.playing) && (St.timeStart = millis(),
            St.playingOffset = St.time,
            kt[St.song].seek((St.playingOffset / St.bpm * 60 * 1e3 + St.songOffset) / 1e3, Jo),
            St.editorHS = [],
            St.editorHSH = [],
            St.editorHSStart = !1,
            St.metronomeLast = !1)) : (St.headerH += It(0, St.headerH, .1),
            St.toolsH += It(0, St.toolsH, .1)),
            noStroke(),
            fill(0, 200),
            rectMode(CORNER),
            rect(0, height / 16 * St.headerY, width, lerp(height / 16 + (1 === St.editorMode ? N * height / 24 : 0), height / 16 * 2, St.headerH));
            var R = 4;
            .25 !== St.snap && St.snap !== 1 / 8 && St.snap !== 1 / 16 && (R = 3),
            push(),
            strokeWeight((width < height ? width : height) / 512),
            translate(-(width / 32 * ((St.time - St.bpm / 60 / 1e3 * St.timelineOffset) * e / St.snap % (8 * R))), 0);
            for (i = 0; i < 64; i++)
                .25 === St.snap || St.snap === 1 / 8 || St.snap === 1 / 16 ? i % (.25 / St.snap * 4) == 0 ? (stroke(0, 175, 255, 255 * (1 - St.headerH)),
                line(width / 32 * i, height / 16 * St.headerY + height / 16 + height / 24 * (1 === St.editorMode ? N : 0), width / 32 * i, height / 16 * St.headerY + height / 16 - height / 16 / 2)) : i % (.25 / St.snap * 2) == 0 ? (stroke(0, 255, 0, 255 * (1 - St.headerH)),
                line(width / 32 * i, height / 16 * St.headerY + height / 16 + height / 24 * (1 === St.editorMode ? N : 0), width / 32 * i, height / 16 * St.headerY + height / 16 - height / 16 / 3)) : i % (.25 / St.snap * 1) == 0 ? (stroke(255, 175, 0, 255 * (1 - St.headerH)),
                line(width / 32 * i, height / 16 * St.headerY + height / 16 + height / 24 * (1 === St.editorMode ? N : 0), width / 32 * i, height / 16 * St.headerY + height / 16 - height / 16 / 4)) : i % (.25 / St.snap * .5) == 0 && St.snap <= 1 / 8 ? (stroke(255, 0, 175, 255 * (1 - St.headerH)),
                line(width / 32 * i, height / 16 * St.headerY + height / 16 + height / 24 * (1 === St.editorMode ? N : 0), width / 32 * i, height / 16 * St.headerY + height / 16 - height / 16 / 5)) : i % (.25 / St.snap * .25) == 0 && St.snap <= 1 / 16 && (stroke(255, 255, 0, 255 * (1 - St.headerH)),
                line(width / 32 * i, height / 16 * St.headerY + height / 16 + height / 24 * (1 === St.editorMode ? N : 0), width / 32 * i, height / 16 * St.headerY + height / 16 - height / 16 / 6)) : (i - 4) % (1 / St.snap / 3 * 3) == 0 ? (stroke(0, 175, 255, 255 * (1 - St.headerH)),
                line(width / 32 * i, height / 16 * St.headerY + height / 16 + height / 24 * (1 === St.editorMode ? N : 0), width / 32 * i, height / 16 * St.headerY + height / 16 - height / 16 / 2)) : (i - 4) % (1 / St.snap / 3 * 3) == 1 / St.snap / 3 * 1 || (i - 4) % (1 / St.snap / 3 * 3) == 1 / St.snap / 3 * 2 ? (stroke(255, 0, 0, 255 * (1 - St.headerH)),
                line(width / 32 * i, height / 16 * St.headerY + height / 16 + height / 24 * (1 === St.editorMode ? N : 0), width / 32 * i, height / 16 * St.headerY + height / 16 - height / 16 / 3)) : (i - 4) % (1 / St.snap / 3 * 3 / 6) == 0 || (i - 4) % (1 / St.snap / 3 * 3 / 6) == 0 ? (stroke(255, 255, 255, 255 * (1 - St.headerH)),
                line(width / 32 * i, height / 16 * St.headerY + height / 16 + height / 24 * (1 === St.editorMode ? N : 0), width / 32 * i, height / 16 * St.headerY + height / 16 - height / 16 / 4)) : (stroke(0, 0, 255, 255 * (1 - St.headerH)),
                line(width / 32 * i, height / 16 * St.headerY + height / 16 + height / 24 * (1 === St.editorMode ? N : 0), width / 32 * i, height / 16 * St.headerY + height / 16 - height / 16 / 6));
            if (pop(),
            push(),
            translate(width / 2 - width / 32 * (St.time * e / St.snap), 0),
            0 === St.editorMode) {
                for (var nt = [], rt = [], i = 0; i < St.beat.length; i++)
                    -1 === nt.indexOf(St.beat[i][1]) && (nt.push(St.beat[i][1]),
                    rt.push(i));
                for (i = 0; i < St.beat.length; i++)
                    width / 32 * ((St.beat[i][1] + (1 === St.beat[i][5] ? St.beat[i][6] : 0)) * e) * (1 / St.snap) + (width / 2 - width / 32 * (St.time * e / St.snap)) > 0 - Rt && width / 32 * (St.beat[i][1] * e) * (1 / St.snap) + (width / 2 - width / 32 * (St.time * e / St.snap)) < width + Rt && (rectMode(CENTER),
                    noStroke(),
                    mt = !0,
                    (mt = -1 === rt.indexOf(i) ? !1 : mt) && (fill(255, 30 * (1 - St.headerH)),
                    rect(width / 32 * (St.beat[i][1] * e) * (1 / St.snap), height / 16 * St.headerY + height / 16 - height / 16 / 2, 3 * Ot(floor(width / 36) / 3), 3 * Ot(floor(width / 36) / 3))),
                    colorMode(HSB),
                    fill(St.beat[i][11], St.beat[i][16], St.beat[i][17], 125 * (1 - St.headerH)),
                    colorMode(RGB),
                    -1 !== St.selectedBeats.indexOf(i) && (stroke(255, 175, 0),
                    strokeWeight(Rt / 8)),
                    0 === St.beat[i][5] ? rect(width / 32 * (St.beat[i][1] * e) * (1 / St.snap) - floor(width / 36) / 3 + Ot(floor(width / 36) / 3) * floor(St.beat[i][0] % 3), height / 16 * St.headerY + height / 16 - height / 16 / 2 - floor(width / 36) / 3 + Ot(floor(width / 36) / 3) * floor(St.beat[i][0] / 3), floor(width / 48) / 3, floor(width / 48) / 3) : (ellipseMode(CENTER),
                    ellipse(width / 32 * (St.beat[i][1] * e) * (1 / St.snap) - floor(width / 36) / 3 + Ot(floor(width / 36) / 3) * floor(St.beat[i][0] % 3), height / 16 * St.headerY + height / 16 - height / 16 / 2 - floor(width / 36) / 3 + Ot(floor(width / 36) / 3) * floor(St.beat[i][0] / 3), floor(width / 48) / 3, floor(width / 48) / 3),
                    rectMode(CORNER),
                    rect(width / 32 * (St.beat[i][1] * e) * (1 / St.snap), height / 16 * St.headerY + height / 16 - height / 16 / 2 - height / 256 / 2, width / 32 * (St.beat[i][6] / St.snap * e), height / 256)))
            }
            if (1 === St.editorMode && St.showGUI)
                for (t = 0; t < St.drawEffects.length; t++) {
                    var i = St.drawEffects[t]
                      , st = (rectMode(CENTER),
                    noStroke(),
                    colorMode(HSB),
                    fill(0 < St.effects[i].displayColor ? St.effects[i].displayColor : 0, St.effects[i].displaySaturation * (!0 !== St.effects[i].disabled ? 1 : .5), St.effects[i].displayBrightness, 200 * (1 - St.headerH) * (!0 !== St.effects[i].disabled ? 1 : .5)),
                    -1 !== St.effectMultiSel.indexOf(i) && (colorMode(RGB),
                    stroke(255, 175, 0, 255 * (1 - St.headerH)),
                    strokeWeight(Rt / 4)),
                    rect(width / 32 * (St.effects[i].time * e) * (1 / St.snap) + width / 32 * (1 / St.snap) * (St.effects[i].moveTime * e) / 2, height / 16 * St.headerY + height / 16 - height / 16 / 2 + height / 24 * St.effects[i].track, constrain(width / 32 * (1 / St.snap) * (St.effects[i].moveTime * e), width / 64, 9999999999999), width / 64, width / 32 * (1 / St.snap) * (St.effects[i].moveTime * e) < width / 64 ? width : 0),
                    textAlign(LEFT, CENTER),
                    colorMode(RGB),
                    fill(!0 !== St.effects[i].disabled ? 255 : 200, 255 * (1 - St.headerH)),
                    noStroke(),
                    Et(St.effectTypeNames[St.effects[i].type], Pt));
                    Ft("" === St.effects[i].displayName ? st : St.effects[i].displayName + " (" + st + ")", width / 32 * (St.effects[i].time * e) * (1 / St.snap) + width / 64 / 2, height / 16 * St.headerY + height / 16 - height / 16 / 2 + height / 24 * St.effects[i].track, constrain(width / 32 * (1 / St.snap) * (St.effects[i].moveTime * e), width / 16, 9999999999999) - width / 64 / 2, width / 64 / 1.5)
                }
            strokeWeight(floor(width / 48) / 3 / 6),
            ellipseMode(CENTER);
            for (i = 0; i < St.sections.length; i++)
                colorMode(RGB),
                -1 === St.sectionsSelected.indexOf(i) ? stroke(255, 255 * (1 - St.headerH)) : stroke(255, 175, 0, 255 * (1 - St.headerH)),
                colorMode(HSB),
                fill(St.sections[i].color, St.sections[i].saturation, St.sections[i].brightness, 255 * (1 - St.headerH)),
                ellipse(width / 32 * (St.sections[i].time * e) * (1 / St.snap), height / 16 * St.headerY + height / 16 + floor(width / 48) / 3 + height / 24 * (1 === St.editorMode ? N : 0), floor(width / 48) / 3, floor(width / 48) / 3);
            colorMode(RGB),
            pop(),
            noStroke(),
            colorMode(HSB),
            rectMode(CENTER);
            var ht, at = !1;
            void 0 === ht && (ht = !1);
            for (i = 0; i < St.sections.length; i++) {
                it = St.sections[i];
                void 0 === St.sectionsHighlight[i] && (St.sectionsHighlight[i] = 0),
                ht !== i && (St.sectionsHighlight[i] += It(0, St.sectionsHighlight[i], .2)),
                At("rcenter", (width - width / 128) / St.timeEnd * it.time + width / 128 / 2, height / 16 * (St.headerH + 1) / 2, width / 128, height / 16 * (St.headerH + 1)) && (at = i),
                fill(it.color, it.saturation, it.brightness, 200 * St.headerH),
                rect((width - width / 128) / St.timeEnd * it.time + width / 128 / 2, height / 16 * (St.headerH + 1) / 2, width / 128 / 4 * (it.visible ? 2 : 1) * (St.sectionsHighlight[i] + 1), height / 16 * (St.headerH + 1))
            }
            !1 !== (ht = at) && (St.sectionsHighlight[at] += It(1, St.sectionsHighlight[at], .3)),
            colorMode(RGB),
            !1 !== at && "scroll" === St.timelineMode && (fill(0, 200),
            rectMode(CENTER),
            rect(width / 2, height / 16 * (St.headerH + 1) + 1.5 * Rt, width / 3 - 2 * Rt, height / 32 + Rt, Rt),
            fill(255),
            textAlign(CENTER, CENTER),
            Ft(St.sections[at].name, width / 2, height / 16 * (St.headerH + 1) + 1.5 * Rt, width / 3 - 3 * Rt, height / 32)),
            rectMode(CORNER),
            fill(255, 255 * (.5 - St.headerH)),
            noStroke(),
            rect(width / 2 - width / 512 / 2, 0, width / 512, height / 16 + height / 24 * (1 === St.editorMode ? N : 0)),
            rectMode(CENTER),
            fill(255, 200 * St.headerH),
            noStroke(),
            rect((width - width / 128) / St.timeEnd * St.time + width / 128 / 2, height / 16 * (St.headerH + 1) / 2, width / 128, height / 16 * (St.headerH + 1)),
            textAlign(LEFT, TOP),
            fill(255, 200),
            Ft(St.timelineTickFor(St.time) + " (" + St.timelineBPM + ") (" + Et("milliseconds_short", Pt, St.timelineOffset) + ")\n" + Do(St.time / St.bpm * 60 * 1e3, "min:sec:ms"), Rt / 4, Rt / 4, width, Rt / 2)
        }
        if (!0 === St.menu ? St.menuSize += It(1, St.menuSize, .2) : St.menuSize += It(0, St.menuSize, .2),
        0 === St.sectionsSelected.length) {
            if (1 === St.editorMode && St.showGUI) {
                if (fill(0, 0, 0, 200),
                rectMode(CORNER),
                noStroke(),
                rect(width - width / 4, height / 16 * 2, width / 2, height / 16 * 12, (width < height ? width : height) / 32),
                1 === St.effectMultiSel.length ? St.effectSel = St.effectMultiSel[0] : St.effectSel = !1,
                St.effectMultiSel.length <= 1 ? St.effectMultiSelLast = !1 : St.effectSelLast = !1,
                !1 === St.effectSel && !1 !== St.effectSelLast && 0 === St.effectMultiSel.length) {
                    function lt(t) {
                        var i = St.timelineTickFor(St.time);
                        for (let e = St.effectMultiSel.length = 0; e < St.effects.length; e++) {
                            var o = St.effects[e];
                            t(i, St.timelineTickFor(o.time)) && St.effectMultiSel.push(e)
                        }
                    }
                    St.effectsNSM.pages = [{
                        title: "edit_effects_automation",
                        items: [{
                            type: "button",
                            name: "edit_effects_item_newAutomation",
                            event: function() {
                                St.effects.push({
                                    type: 0,
                                    time: St.time,
                                    bpm: St.timelineBPM,
                                    offset: St.timelineOffset,
                                    moveTime: 1 / St.timelineBPM * 120,
                                    easeType: 0,
                                    moveX: 0,
                                    moveY: 0,
                                    track: 0
                                }),
                                St.effectMultiSel.push(St.effects.length - 1)
                            },
                            hint: "edit_effects_item_newAutomation_sub"
                        }]
                    }, {
                        title: "edit_select_quickSelect",
                        items: [{
                            type: "button",
                            name: "edit_select_item_selectBefore",
                            hint: "edit_select_item_selectBefore_sub",
                            event: ()=>lt((e,t)=>t <= e)
                        }, {
                            type: "button",
                            name: "edit_select_item_selectCurrent",
                            hint: "edit_select_item_selectCurrent_sub",
                            event: ()=>lt((e,t)=>t === e)
                        }, {
                            type: "button",
                            name: "edit_select_item_selectAfter",
                            hint: "edit_select_item_selectAfter_sub",
                            event: ()=>lt((e,t)=>e <= t)
                        }]
                    }],
                    St.effectsNSM.data.page = 0,
                    St.effectSelLast = !1
                } else if ((St.effectSelLast !== St.effectSel || !1 !== St.effectSel && St.effectTypeLast !== St.effects[St.effectSel].type) && 1 === St.effectMultiSel.length) {
                    St.effectsNSM.pages = [];
                    for (var dt = [], i = 0; i < St.effectTypeNames.length; i++)
                        dt.push(i);
                    for (var k = [{
                        type: "dropdown",
                        name: "edit_effects_item_automationType",
                        hint: "edit_effects_item_automationType_sub",
                        var: [St.effects[St.effectSel], "type"],
                        options: dt,
                        labels: St.effectTypeNames
                    }, {
                        type: "number",
                        name: "edit_effects_item_startTime",
                        hint: "edit_effects_item_startTime_sub",
                        var: [St.effects[St.effectSel], "time"],
                        min: !1,
                        max: !1,
                        bigChange: 1,
                        smallChange: [St, "snap"],
                        display: function() {
                            return Xt({
                                recieve: "bpm",
                                time: St.effects[St.effectSel].time,
                                bpm: St.effects[St.effectSel].bpm,
                                offset: St.effects[St.effectSel].offset,
                                lvlBPM: St.bpm
                            })
                        },
                        update: function(e) {
                            e.bigChange = Xt({
                                recieve: "raw",
                                time: 1,
                                bpm: St.effects[St.effectSel].bpm,
                                offset: 0,
                                lvlBPM: St.bpm
                            }),
                            e.smallChange = Xt({
                                recieve: "raw",
                                time: St.snap,
                                bpm: St.effects[St.effectSel].bpm,
                                offset: 0,
                                lvlBPM: St.bpm
                            })
                        },
                        convert: function(e) {
                            return Xt({
                                recieve: "raw",
                                time: e,
                                bpm: St.effects[St.effectSel].bpm,
                                offset: St.effects[St.effectSel].offset,
                                lvlBPM: St.bpm
                            })
                        }
                    }, {
                        type: "number",
                        name: "edit_select_item_bpm",
                        hint: "edit_select_item_bpm_sub",
                        var: [St.effects[St.effectSel], "bpm"],
                        min: !1,
                        max: !1,
                        bigChange: 10,
                        smallChange: 1
                    }, {
                        type: "number",
                        name: "edit_select_item_offset",
                        hint: "edit_select_item_offset_sub",
                        var: [St.effects[St.effectSel], "offset"],
                        min: !1,
                        max: !1,
                        bigChange: 10,
                        smallChange: 1
                    }, {
                        type: "number",
                        name: "edit_effects_item_duration",
                        hint: "edit_effects_item_duration_sub",
                        var: [St.effects[St.effectSel], "moveTime"],
                        min: 0,
                        max: !1,
                        bigChange: 1,
                        smallChange: [St, "snap"],
                        display: function() {
                            return Xt({
                                recieve: "bpm",
                                time: St.effects[St.effectSel].moveTime,
                                bpm: St.effects[St.effectSel].bpm,
                                offset: 0,
                                lvlBPM: St.bpm
                            })
                        },
                        update: function(e) {
                            e.bigChange = Xt({
                                recieve: "raw",
                                time: 1,
                                bpm: St.effects[St.effectSel].bpm,
                                offset: 0,
                                lvlBPM: St.bpm
                            }),
                            e.smallChange = Xt({
                                recieve: "raw",
                                time: St.snap,
                                bpm: St.effects[St.effectSel].bpm,
                                offset: 0,
                                lvlBPM: St.bpm
                            })
                        },
                        convert: function(e) {
                            return Xt({
                                recieve: "raw",
                                time: e,
                                bpm: St.effects[St.effectSel].bpm,
                                offset: 0,
                                lvlBPM: St.bpm
                            })
                        }
                    }], gt = (9 === St.effects[St.effectSel].type ? (St.effectsNSM.pages[0] = {
                        title: "edit_effects_formatting",
                        items: []
                    },
                    St.effectsNSM.pages[0].items = St.effectsNSM.pages[0].items.concat(k.splice(0, 1)),
                    St.effectsNSM.pages[1] = {
                        title: "edit_effects_automation",
                        items: []
                    },
                    St.effectsNSM.pages[1].items = St.effectsNSM.pages[1].items.concat(k),
                    St.effectsNSM.pages[2] = {
                        title: "edit_effects_customize",
                        items: []
                    }) : (St.effectsNSM.pages[0] = {
                        title: "edit_effects_automation",
                        items: []
                    },
                    St.effectsNSM.pages[0].items = St.effectsNSM.pages[0].items.concat(k),
                    St.effectsNSM.pages[1] = {
                        title: "edit_effects_customize",
                        items: []
                    }),
                    void 0 === St.effects[St.effectSel].displayColor && (St.effects[St.effectSel].displayColor = 0),
                    void 0 === St.effects[St.effectSel].displaySaturation && (St.effects[St.effectSel].displaySaturation = 255),
                    void 0 === St.effects[St.effectSel].displayBrightness && (St.effects[St.effectSel].displayBrightness = 255),
                    void 0 === St.effects[St.effectSel].displayName && (St.effects[St.effectSel].displayName = ""),
                    void 0 === St.effects[St.effectSel].disabled && (St.effects[St.effectSel].disabled = !1),
                    St.effectsNSM.pages[St.effectsNSM.pages.length - 1].items = [{
                        type: "string",
                        name: "edit_effects_item_displayName",
                        hint: "edit_effects_item_displayName_sub",
                        var: [St.effects[St.effectSel], "displayName"]
                    }, {
                        type: "color",
                        name: "edit_effects_item_displayColor",
                        hint: "edit_effects_item_displayColor_sub",
                        mode: HSB,
                        hue: [St.effects[St.effectSel], "displayColor"],
                        saturation: [St.effects[St.effectSel], "displaySaturation"],
                        brightness: [St.effects[St.effectSel], "displayBrightness"]
                    }, {
                        type: "number",
                        name: "edit_effects_item_track",
                        hint: "edit_effects_item_track_sub",
                        var: [St.effects[St.effectSel], "track"],
                        min: 0,
                        max: 21,
                        bigChange: 3,
                        smallChange: 1
                    }, {
                        type: "boolean",
                        name: "edit_effects_item_disable",
                        var: [St.effects[St.effectSel], "disabled"],
                        hint: "edit_effects_item_disable_sub"
                    }, {
                        type: "button",
                        name: "edit_select_item_copy",
                        event: En,
                        hint: "edit_select_item_copy_sub"
                    }, {
                        type: "button",
                        name: "edit_effects_item_deleteAutomation",
                        event: function() {
                            St.effects.splice(St.effectSel, 1),
                            St.effectMultiSel.splice(St.effectMultiSel.indexOf(i), 1),
                            St.effectsTabSel = 0
                        },
                        hint: "edit_effects_item_deleteAutomation_sub"
                    }],
                    []), i = 0; i < St.textAlignNames.length; i++)
                        gt.push(i);
                    for (var ct = [], i = 0; i < St.textDirectionNames.length; i++)
                        ct.push(i);
                    var Q = {
                        moveX: {
                            type: "number",
                            name: "edit_effects_item_moveX",
                            hint: "edit_effects_item_moveX_sub",
                            var: [St.effects[St.effectSel], "moveX"],
                            min: !1,
                            max: !1,
                            bigChange: 8,
                            smallChange: 1
                        },
                        moveY: {
                            type: "number",
                            name: "edit_effects_item_moveY",
                            hint: "edit_effects_item_moveY_sub",
                            var: [St.effects[St.effectSel], "moveY"],
                            min: !1,
                            max: !1,
                            bigChange: 8,
                            smallChange: 1
                        },
                        scaleX: {
                            type: "number",
                            name: "edit_effects_item_scaleX",
                            hint: "edit_effects_item_scaleX_sub",
                            var: [St.effects[St.effectSel], "scaleX"],
                            min: !1,
                            max: !1,
                            bigChange: 1,
                            smallChange: .1
                        },
                        scaleY: {
                            type: "number",
                            name: "edit_effects_item_scaleY",
                            hint: "edit_effects_item_scaleY_sub",
                            var: [St.effects[St.effectSel], "scaleY"],
                            min: !1,
                            max: !1,
                            bigChange: 1,
                            smallChange: .1
                        },
                        moveD: {
                            type: "number",
                            name: "edit_effects_item_moveD",
                            hint: "edit_effects_item_moveD_sub",
                            var: [St.effects[St.effectSel], "moveD"],
                            min: !1,
                            max: !1,
                            bigChange: 9,
                            smallChange: 1
                        },
                        tileID: {
                            type: "tiles",
                            name: "edit_effects_item_tileID",
                            hint: "edit_effects_item_tileID_sub",
                            var: [St.effects[St.effectSel], "tileID"]
                        },
                        foresight: {
                            type: "number",
                            name: "edit_effects_item_targetValue",
                            hint: "edit_effects_item_targetValue_sub",
                            var: [St.effects[St.effectSel], "targetValue"],
                            min: !1,
                            max: !1,
                            bigChange: .3,
                            smallChange: .1
                        },
                        targetValue: {
                            type: "number",
                            name: "edit_effects_item_targetValue",
                            hint: "edit_effects_item_targetValue_sub",
                            var: [St.effects[St.effectSel], "targetValue"],
                            min: !1,
                            max: !1,
                            bigChange: 8,
                            smallChange: 1
                        },
                        vignette: {
                            type: "number",
                            name: "edit_effects_item_targetValue",
                            hint: "edit_effects_item_targetValue_sub",
                            var: [St.effects[St.effectSel], "vignette"],
                            min: !1,
                            max: !1,
                            bigChange: 8,
                            smallChange: 1
                        },
                        text: {
                            type: "string",
                            name: "edit_effects_item_text",
                            hint: "edit_effects_item_text_sub",
                            var: [St.effects[St.effectSel], "text"]
                        },
                        posX: {
                            type: "number",
                            name: "edit_effects_item_posX",
                            hint: "edit_effects_item_posX_sub",
                            var: [St.effects[St.effectSel], "posX"],
                            min: !1,
                            max: !1,
                            bigChange: 8,
                            smallChange: 1
                        },
                        posY: {
                            type: "number",
                            name: "edit_effects_item_posY",
                            hint: "edit_effects_item_posY_sub",
                            var: [St.effects[St.effectSel], "posY"],
                            min: !1,
                            max: !1,
                            bigChange: 8,
                            smallChange: 1
                        },
                        posD: {
                            type: "number",
                            name: "edit_effects_item_moveD",
                            hint: "edit_effects_item_moveD_sub",
                            var: [St.effects[St.effectSel], "posD"],
                            min: !1,
                            max: !1,
                            bigChange: 9,
                            smallChange: 1
                        },
                        size: {
                            type: "number",
                            name: "edit_effects_item_size",
                            hint: "edit_effects_item_size_sub",
                            var: [St.effects[St.effectSel], "size"],
                            min: 0,
                            max: !1,
                            bigChange: 8,
                            smallChange: 1
                        },
                        textAl: {
                            type: "dropdown",
                            name: "edit_effects_item_textAlign",
                            hint: "edit_effects_item_textAlign_sub",
                            var: [St.effects[St.effectSel], "textAl"],
                            options: gt,
                            labels: St.textAlignNames
                        },
                        textDi: {
                            type: "dropdown",
                            name: "edit_effects_item_textDirection",
                            hint: "edit_effects_item_textDirection_sub",
                            var: [St.effects[St.effectSel], "textDi"],
                            options: ct,
                            labels: St.textDirectionNames
                        },
                        highlight: {
                            type: "number",
                            name: "edit_effects_item_highlight",
                            hint: "edit_effects_item_highlight_sub",
                            var: [St.effects[St.effectSel], "highlight"],
                            min: 0,
                            max: !1,
                            bigChange: 8,
                            smallChange: 1
                        },
                        highlightColor: {
                            type: "color",
                            name: "edit_effects_item_highlightColor",
                            hint: "edit_effects_item_highlightColor_sub",
                            mode: HSB,
                            hue: [St.effects[St.effectSel], "highlightColor"],
                            saturation: [St.effects[St.effectSel], "highlightSaturation"],
                            brightness: [St.effects[St.effectSel], "highlightBrightness"],
                            alpha: [St.effects[St.effectSel], "highlightAlpha"]
                        },
                        backgroundColor: {
                            type: "color",
                            name: "edit_effects_item_backgroundColor",
                            hint: "edit_effects_item_backgroundColor_sub",
                            mode: HSB,
                            hue: [St.effects[St.effectSel], "backgroundColor"],
                            saturation: [St.effects[St.effectSel], "backgroundSaturation"],
                            brightness: [St.effects[St.effectSel], "backgroundBrightness"],
                            alpha: [St.effects[St.effectSel], "backgroundAlpha"]
                        },
                        transparency: {
                            type: "number",
                            name: "edit_effects_item_transparency",
                            hint: "edit_effects_item_transparency_sub",
                            var: [St.effects[St.effectSel], "transparency"],
                            min: 0,
                            max: 255,
                            bigChange: 16,
                            smallChange: 1
                        },
                        movePosX: {
                            type: "number",
                            name: "edit_effects_item_posX",
                            hint: "edit_effects_item_posX_sub",
                            var: [St.effects[St.effectSel], "moveX"],
                            min: !1,
                            max: !1,
                            bigChange: 8,
                            smallChange: 1
                        },
                        movePosY: {
                            type: "number",
                            name: "edit_effects_item_posY",
                            hint: "edit_effects_item_posY_sub",
                            var: [St.effects[St.effectSel], "moveY"],
                            min: !1,
                            max: !1,
                            bigChange: 8,
                            smallChange: 1
                        },
                        moveSize: {
                            type: "number",
                            name: "edit_effects_item_size",
                            hint: "edit_effects_item_size_sub",
                            var: [St.effects[St.effectSel], "moveSize"],
                            min: !1,
                            max: !1,
                            bigChange: 8,
                            smallChange: 1
                        },
                        targetHighlightColor: {
                            type: "color",
                            name: "edit_effects_item_highlightColor",
                            hint: "edit_effects_item_highlightColor_sub",
                            mode: HSB,
                            hue: [St.effects[St.effectSel], "targetHighlightColor"],
                            saturation: [St.effects[St.effectSel], "targetHighlightSaturation"],
                            brightness: [St.effects[St.effectSel], "targetHighlightBrightness"],
                            alpha: [St.effects[St.effectSel], "targetHighlightAlpha"],
                            loops: [St.effects[St.effectSel], "targetHighlightLoops"],
                            smooth: [St.effects[St.effectSel], "targetHighlightSmooth"]
                        },
                        targetBackgroundColor: {
                            type: "color",
                            name: "edit_effects_item_backgroundColor",
                            hint: "edit_effects_item_backgroundColor_sub",
                            mode: HSB,
                            hue: [St.effects[St.effectSel], "targetBackgroundColor"],
                            saturation: [St.effects[St.effectSel], "targetBackgroundSaturation"],
                            brightness: [St.effects[St.effectSel], "targetBackgroundBrightness"],
                            alpha: [St.effects[St.effectSel], "targetBackgroundAlpha"],
                            loops: [St.effects[St.effectSel], "targetBackgroundLoops"],
                            smooth: [St.effects[St.effectSel], "targetBackgroundSmooth"]
                        },
                        startColor: {
                            type: "color",
                            name: "edit_effects_item_startColor",
                            hint: "edit_effects_item_startColor_sub",
                            mode: HSB,
                            hue: [St.effects[St.effectSel], "startColor"],
                            saturation: [St.effects[St.effectSel], "startSaturation"],
                            brightness: [St.effects[St.effectSel], "startBrightness"],
                            alpha: [St.effects[St.effectSel], "startAlpha"]
                        },
                        endColor: {
                            type: "color",
                            name: "edit_effects_item_endColor",
                            hint: "edit_effects_item_endColor_sub",
                            mode: HSB,
                            hue: [St.effects[St.effectSel], "endColor"],
                            saturation: [St.effects[St.effectSel], "endSaturation"],
                            brightness: [St.effects[St.effectSel], "endBrightness"],
                            alpha: [St.effects[St.effectSel], "endAlpha"],
                            loops: [St.effects[St.effectSel], "endLoops"],
                            smooth: [St.effects[St.effectSel], "endSmooth"]
                        },
                        setColorForTile: {
                            type: "dropdown",
                            name: "edit_effects_item_setColorFor",
                            hint: "edit_effects_item_setColorFor_sub",
                            var: [St.effects[St.effectSel], "setColorFor"],
                            options: [0, 1, 2],
                            labels: ["edit_effects_tileBorder", "edit_effects_tileOverlay", "edit_effects_tileBoth"]
                        },
                        setColorForOverlay: {
                            type: "dropdown",
                            name: "edit_effects_item_setColorFor",
                            hint: "edit_effects_item_setColorFor_sub",
                            var: [St.effects[St.effectSel], "setColorFor"],
                            options: [0, 1],
                            labels: ["edit_effects_overlayBackground", "edit_effects_overlayForeground"]
                        },
                        trailLength: {
                            type: "number",
                            name: "edit_effects_item_trailLength",
                            hint: "edit_effects_item_trailLength_sub",
                            var: [St.effects[St.effectSel], "trailLength"],
                            min: !1,
                            max: !1,
                            bigChange: 2,
                            smallChange: 1
                        },
                        trailSpacing: {
                            type: "number",
                            name: "edit_effects_item_trailSpacing",
                            hint: "edit_effects_item_trailSpacing_sub",
                            var: [St.effects[St.effectSel], "trailSpacing"],
                            min: !1,
                            max: !1,
                            bigChange: 10,
                            smallChange: 1
                        },
                        trailAlpha: {
                            type: "number",
                            name: "edit_effects_item_trailAlpha",
                            hint: "edit_effects_item_trailAlpha_sub",
                            var: [St.effects[St.effectSel], "trailAlpha"],
                            min: !1,
                            max: !1,
                            bigChange: 16,
                            smallChange: 1
                        },
                        trailColor: {
                            type: "boolean",
                            name: "edit_effects_item_trailColor",
                            hint: "edit_effects_item_trailColor_sub",
                            var: [St.effects[St.effectSel], "trailColor"]
                        },
                        trailDelete: {
                            type: "boolean",
                            name: "edit_effects_item_trailDelete",
                            hint: "edit_effects_item_trailDelete_sub",
                            var: [St.effects[St.effectSel], "trailDelete"]
                        }
                    };
                    switch (St.effects[St.effectSel].type) {
                    default:
                        St.effectsNSM.pages[0].items.push(Q.moveX, Q.moveY);
                        break;
                    case 1:
                        void 0 === St.effects[St.effectSel].scaleX && (St.effects[St.effectSel].scaleX = 1),
                        void 0 === St.effects[St.effectSel].scaleY && (St.effects[St.effectSel].scaleY = 1),
                        St.effectsNSM.pages[0].items.push(Q.scaleX, Q.scaleY);
                        break;
                    case 2:
                        void 0 === St.effects[St.effectSel].moveD && (St.effects[St.effectSel].moveD = 0),
                        St.effectsNSM.pages[0].items.push(Q.moveD);
                        break;
                    case 3:
                        void 0 === St.effects[St.effectSel].tileID && (St.effects[St.effectSel].tileID = [0]),
                        St.effectsNSM.pages[0].items.push(Q.tileID, Q.moveX, Q.moveY);
                        break;
                    case 4:
                        void 0 === St.effects[St.effectSel].tileID && (St.effects[St.effectSel].tileID = [0]),
                        void 0 === St.effects[St.effectSel].scaleX && (St.effects[St.effectSel].scaleX = 1),
                        void 0 === St.effects[St.effectSel].scaleY && (St.effects[St.effectSel].scaleY = 1),
                        St.effectsNSM.pages[0].items.push(Q.tileID, Q.scaleX, Q.scaleY);
                        break;
                    case 5:
                        void 0 === St.effects[St.effectSel].tileID && (St.effects[St.effectSel].tileID = [0]),
                        void 0 === St.effects[St.effectSel].moveD && (St.effects[St.effectSel].moveD = 0),
                        St.effectsNSM.pages[0].items.push(Q.tileID, Q.moveD);
                        break;
                    case 6:
                        void 0 === St.effects[St.effectSel].targetValue && (St.effects[St.effectSel].targetValue = 0),
                        St.effectsNSM.pages[0].items.push(Q.foresight);
                        break;
                    case 7:
                        void 0 === St.effects[St.effectSel].targetValue && (St.effects[St.effectSel].targetValue = 0),
                        St.effectsNSM.pages[0].items.push(Q.targetValue);
                        break;
                    case 8:
                        void 0 === St.effects[St.effectSel].tileID && (St.effects[St.effectSel].tileID = [0]),
                        void 0 === St.effects[St.effectSel].targetValue && (St.effects[St.effectSel].targetValue = 0),
                        St.effectsNSM.pages[0].items.push(Q.tileID, Q.targetValue);
                        break;
                    case 9:
                        void 0 === St.effects[St.effectSel].posX && (St.effects[St.effectSel].posX = 50),
                        void 0 === St.effects[St.effectSel].posY && (St.effects[St.effectSel].posY = 50),
                        void 0 === St.effects[St.effectSel].posD && (St.effects[St.effectSel].posD = 0),
                        void 0 === St.effects[St.effectSel].size && (St.effects[St.effectSel].size = 10),
                        void 0 === St.effects[St.effectSel].text && (St.effects[St.effectSel].text = "Text"),
                        void 0 === St.effects[St.effectSel].textAl && (St.effects[St.effectSel].textAl = 4),
                        void 0 === St.effects[St.effectSel].textDi && (St.effects[St.effectSel].textDi = 0),
                        void 0 === St.effects[St.effectSel].highlight && (St.effects[St.effectSel].highlight = 0),
                        void 0 === St.effects[St.effectSel].highlightColor && (St.effects[St.effectSel].highlightColor = 141),
                        void 0 === St.effects[St.effectSel].highlightSaturation && (St.effects[St.effectSel].highlightSaturation = 255),
                        void 0 === St.effects[St.effectSel].highlightBrightness && (St.effects[St.effectSel].highlightBrightness = 255),
                        void 0 === St.effects[St.effectSel].highlightAlpha && (St.effects[St.effectSel].highlightAlpha = 255),
                        void 0 === St.effects[St.effectSel].backgroundColor && (St.effects[St.effectSel].backgroundColor = 141),
                        void 0 === St.effects[St.effectSel].backgroundSaturation && (St.effects[St.effectSel].backgroundSaturation = 0),
                        void 0 === St.effects[St.effectSel].backgroundBrightness && (St.effects[St.effectSel].backgroundBrightness = 255),
                        void 0 === St.effects[St.effectSel].backgroundAlpha && (St.effects[St.effectSel].backgroundAlpha = 255),
                        void 0 === St.effects[St.effectSel].moveX && (St.effects[St.effectSel].moveX = 0),
                        void 0 === St.effects[St.effectSel].moveY && (St.effects[St.effectSel].moveY = 0),
                        void 0 === St.effects[St.effectSel].moveD && (St.effects[St.effectSel].moveD = 0),
                        void 0 === St.effects[St.effectSel].moveSize && (St.effects[St.effectSel].moveSize = 0),
                        void 0 === St.effects[St.effectSel].targetHighlightColor && (St.effects[St.effectSel].targetHighlightColor = 141),
                        void 0 === St.effects[St.effectSel].targetHighlightSaturation && (St.effects[St.effectSel].targetHighlightSaturation = 255),
                        void 0 === St.effects[St.effectSel].targetHighlightBrightness && (St.effects[St.effectSel].targetHighlightBrightness = 255),
                        void 0 === St.effects[St.effectSel].targetHighlightAlpha && (St.effects[St.effectSel].targetHighlightAlpha = 255),
                        void 0 === St.effects[St.effectSel].targetHighlightLoops && (St.effects[St.effectSel].targetHighlightLoops = 0),
                        void 0 === St.effects[St.effectSel].targetHighlightSmooth && (St.effects[St.effectSel].targetHighlightSmooth = !0),
                        void 0 === St.effects[St.effectSel].targetBackgroundColor && (St.effects[St.effectSel].targetBackgroundColor = 141),
                        void 0 === St.effects[St.effectSel].targetBackgroundSaturation && (St.effects[St.effectSel].targetBackgroundSaturation = 0),
                        void 0 === St.effects[St.effectSel].targetBackgroundBrightness && (St.effects[St.effectSel].targetBackgroundBrightness = 255),
                        void 0 === St.effects[St.effectSel].targetBackgroundAlpha && (St.effects[St.effectSel].targetBackgroundAlpha = 255),
                        void 0 === St.effects[St.effectSel].targetBackgroundLoops && (St.effects[St.effectSel].targetBackgroundLoops = 0),
                        void 0 === St.effects[St.effectSel].targetBackgroundSmooth && (St.effects[St.effectSel].targetBackgroundSmooth = !0),
                        St.effectsNSM.pages[0].items.push(Q.text, Q.posX, Q.posY, Q.posD, Q.size, Q.textAl, Q.textDi, Q.highlight, Q.highlightColor, Q.backgroundColor),
                        St.effectsNSM.pages[1].items.push(Q.movePosX, Q.movePosY, Q.moveD, Q.moveSize, Q.targetHighlightColor, Q.targetBackgroundColor);
                        break;
                    case 10:
                        void 0 === St.effects[St.effectSel].vignette && (St.effects[St.effectSel].vignette = 1),
                        St.effectsNSM.pages[0].items.push(Q.vignette);
                        break;
                    case 11:
                        void 0 === St.effects[St.effectSel].moveX && (St.effects[St.effectSel].moveX = 0),
                        void 0 === St.effects[St.effectSel].moveY && (St.effects[St.effectSel].moveY = 0),
                        St.effectsNSM.pages[0].items.push(Q.moveX, Q.moveY);
                        break;
                    case 12:
                        void 0 === St.effects[St.effectSel].tileID && (St.effects[St.effectSel].tileID = [0]),
                        void 0 === St.effects[St.effectSel].startColor && (St.effects[St.effectSel].startColor = 141),
                        void 0 === St.effects[St.effectSel].startSaturation && (St.effects[St.effectSel].startSaturation = 0),
                        void 0 === St.effects[St.effectSel].startBrightness && (St.effects[St.effectSel].startBrightness = 255),
                        void 0 === St.effects[St.effectSel].startAlpha && (St.effects[St.effectSel].startAlpha = 255),
                        void 0 === St.effects[St.effectSel].endColor && (St.effects[St.effectSel].endColor = 141),
                        void 0 === St.effects[St.effectSel].endSaturation && (St.effects[St.effectSel].endSaturation = 0),
                        void 0 === St.effects[St.effectSel].endBrightness && (St.effects[St.effectSel].endBrightness = 255),
                        void 0 === St.effects[St.effectSel].endAlpha && (St.effects[St.effectSel].endAlpha = 255),
                        void 0 === St.effects[St.effectSel].endLoops && (St.effects[St.effectSel].endLoops = 0),
                        void 0 === St.effects[St.effectSel].endSmooth && (St.effects[St.effectSel].endSmooth = !0),
                        void 0 === St.effects[St.effectSel].setColorFor && (St.effects[St.effectSel].setColorFor = 0),
                        St.effectsNSM.pages[0].items.push(Q.tileID, Q.startColor, Q.endColor, Q.setColorForTile);
                        break;
                    case 13:
                        void 0 === St.effects[St.effectSel].startColor && (St.effects[St.effectSel].startColor = 141),
                        void 0 === St.effects[St.effectSel].startSaturation && (St.effects[St.effectSel].startSaturation = 0),
                        void 0 === St.effects[St.effectSel].startBrightness && (St.effects[St.effectSel].startBrightness = 255),
                        void 0 === St.effects[St.effectSel].startAlpha && (St.effects[St.effectSel].startAlpha = 0),
                        void 0 === St.effects[St.effectSel].endColor && (St.effects[St.effectSel].endColor = 141),
                        void 0 === St.effects[St.effectSel].endSaturation && (St.effects[St.effectSel].endSaturation = 255),
                        void 0 === St.effects[St.effectSel].endBrightness && (St.effects[St.effectSel].endBrightness = 255),
                        void 0 === St.effects[St.effectSel].endAlpha && (St.effects[St.effectSel].endAlpha = 100),
                        void 0 === St.effects[St.effectSel].endLoops && (St.effects[St.effectSel].endLoops = 0),
                        void 0 === St.effects[St.effectSel].endSmooth && (St.effects[St.effectSel].endSmooth = !0),
                        void 0 === St.effects[St.effectSel].setColorFor && (St.effects[St.effectSel].setColorFor = 0),
                        St.effectsNSM.pages[0].items.push(Q.startColor, Q.endColor, Q.setColorForOverlay);
                        break;
                    case 14:
                        void 0 === St.effects[St.effectSel].tileID && (St.effects[St.effectSel].tileID = [0]),
                        void 0 === St.effects[St.effectSel].trailLength && (St.effects[St.effectSel].trailLength = 5),
                        void 0 === St.effects[St.effectSel].trailSpacing && (St.effects[St.effectSel].trailSpacing = 0),
                        void 0 === St.effects[St.effectSel].trailAlpha && (St.effects[St.effectSel].trailAlpha = 0),
                        void 0 === St.effects[St.effectSel].trailColor && (St.effects[St.effectSel].trailColor = !0),
                        void 0 === St.effects[St.effectSel].trailDelete && (St.effects[St.effectSel].trailDelete = !1),
                        St.effectsNSM.pages[0].items.push(Q.tileID, Q.trailLength, Q.trailSpacing, Q.trailAlpha, Q.trailColor, Q.trailDelete)
                    }
                    for (var ft = [], i = 0; i < Ti.length; i++)
                        ft.push(i);
                    T = 0;
                    9 === St.effects[St.effectSel].type && (T = 1),
                    St.effectsNSM.pages[T].items.push({
                        type: "dropdown",
                        name: "edit_effects_item_easeType",
                        hint: "edit_effects_item_easeType_sub",
                        var: [St.effects[St.effectSel], "easeType"],
                        options: ft,
                        labels: Ti
                    }),
                    St.effectsNSM.pages[0].items.push({
                        type: "button",
                        name: "edit_effects_item_deselectAutomation",
                        event: function() {
                            St.effectMultiSel = [],
                            St.effectMultiSelLast = !1,
                            St.effectSelLast = !0
                        },
                        hint: "edit_effects_item_deselectAutomation_sub"
                    }),
                    St.effectSelLast = St.effectSel,
                    St.effectTypeLast = St.effects[St.effectSel].type
                } else if (1 < St.effectMultiSel.length && St.effectMultiSelLast !== St.effectMultiSel) {
                    St.effectMultiSelLast = St.effectMultiSel,
                    St.effectsNSM.pages = [{
                        title: "edit_effects_automation",
                        items: []
                    }, {
                        title: "edit_effects_customize",
                        items: []
                    }];
                    for (var I = {
                        time: [],
                        moveTime: [],
                        track: [],
                        disabled: []
                    }, i = 0; i < St.effectMultiSel.length; i++) {
                        ze = St.effectMultiSel[i];
                        I.time.push([St.effects[ze], "time"]),
                        I.moveTime.push([St.effects[ze], "moveTime"]),
                        I.track.push([St.effects[ze], "track"]),
                        I.disabled.push([St.effects[ze], "disabled"])
                    }
                    St.effectsNSM.pages[0].items.push({
                        type: "number",
                        name: "edit_effects_item_startTime",
                        hint: "edit_effects_item_startTime_sub",
                        min: !1,
                        max: !1,
                        bigChange: 1,
                        smallChange: [St, "snap"],
                        multiple: !0,
                        vars: I.time,
                        update: function(e) {
                            e.bigChange = Xt({
                                recieve: "raw",
                                time: 1,
                                bpm: St.timelineBPM,
                                offset: 0,
                                lvlBPM: St.bpm
                            }),
                            e.smallChange = Xt({
                                recieve: "raw",
                                time: St.snap,
                                bpm: St.timelineBPM,
                                offset: 0,
                                lvlBPM: St.bpm
                            })
                        }
                    }, {
                        type: "number",
                        name: "edit_effects_item_duration",
                        hint: "edit_effects_item_duration_sub",
                        min: 0,
                        max: !1,
                        bigChange: 1,
                        smallChange: [St, "snap"],
                        multiple: !0,
                        vars: I.moveTime,
                        update: function(e) {
                            e.bigChange = Xt({
                                recieve: "raw",
                                time: 1,
                                bpm: St.timelineBPM,
                                offset: 0,
                                lvlBPM: St.bpm
                            }),
                            e.smallChange = Xt({
                                recieve: "raw",
                                time: St.snap,
                                bpm: St.timelineBPM,
                                offset: 0,
                                lvlBPM: St.bpm
                            })
                        }
                    }, {
                        type: "button",
                        name: "edit_effects_item_deselectAutomation",
                        event: function() {
                            St.effectMultiSel = [],
                            St.effectMultiSelLast = !1,
                            St.effectSelLast = !0
                        },
                        hint: "edit_effects_item_deselectAutomation_sub"
                    }, {
                        type: "button",
                        name: "edit_delete_multiple",
                        keys: [String(St.effectMultiSel.length)],
                        hint: "edit_effects_item_deleteAutomation_sub",
                        event: ()=>{
                            Yo.activate("edit_delete_confirmEffects", [String(St.effectMultiSel.length)], ()=>{
                                const t = Symbol();
                                for (const e of St.effectMultiSel)
                                    St.effects[e] = t;
                                St.effects = St.effects.filter(e=>e !== t),
                                St.effectMultiSel = [],
                                St.effectMultiSelLast = !1,
                                St.effectSelLast = !0,
                                St.effectsTabSel = 0
                            }
                            )
                        }
                    }),
                    St.effectsNSM.pages[1].items.push({
                        type: "number",
                        name: "edit_effects_item_track",
                        hint: "edit_effects_item_track_sub",
                        min: 0,
                        max: 21,
                        bigChange: 3,
                        smallChange: 1,
                        multiple: !0,
                        vars: I.track
                    }, {
                        type: "boolean",
                        name: "edit_effects_item_disable",
                        vars: I.disabled,
                        hint: "edit_effects_item_disable_sub",
                        multiple: !0
                    }, {
                        type: "button",
                        name: "edit_select_item_copy",
                        event: En,
                        hint: "edit_select_item_copy_sub"
                    })
                }
                St.effectsNSM.draw({
                    x: width - width / 4,
                    y: height / 16 * 2,
                    width: width / 4,
                    height: height / 16 * 12,
                    stacked: !0,
                    maxBarHeight: height / 16 / 1.25,
                    buffer: height / 16 * 12 / 128
                }),
                fill(255, 200),
                textAlign(LEFT, TOP),
                textSize(Rt / 2.5),
                text(Kn(), Rt, height / 16 + Rt)
            } else if (0 === St.editorMode && 0 < St.selectedBeats.length) {
                if (fill(0, 0, 0, 200),
                rectMode(CORNER),
                noStroke(),
                rect(width - width / 4, height / 16 * 3, width / 2, height / 16 * 10, (width < height ? width : height) / 32),
                !Xi(St.sbeatsLast, St.selectedBeats)) {
                    for (var ut = [], i = 0; i < St.transitionNames.length; i++)
                        ut.push(i);
                    for (I = {
                        time: [],
                        holdLength: [],
                        beatColor: [],
                        beatSaturation: [],
                        beatBrightness: []
                    },
                    i = 0; i < St.selectedBeats.length; i++)
                        I.time.push([St.beat[St.selectedBeats[i]], "1"]),
                        I.holdLength.push([St.beat[St.selectedBeats[i]], "6"]),
                        I.beatColor.push([St.beat[St.selectedBeats[i]], "11"]),
                        I.beatSaturation.push([St.beat[St.selectedBeats[i]], "16"]),
                        I.beatBrightness.push([St.beat[St.selectedBeats[i]], "17"]);
                    if (St.beatNSM.pages = [{
                        title: "edit_select_metadata",
                        items: []
                    }, {
                        title: "edit_select_transformations",
                        items: []
                    }],
                    1 === St.selectedBeats.length) {
                        function vt(t) {
                            var e = St.selectedBeats[0];
                            if (void 0 !== e) {
                                const o = St.beat[e];
                                if (o) {
                                    var i = St.timelineTickFor(o[1]);
                                    for (let e = St.selectedBeats.length = 0; e < St.beat.length; e++) {
                                        const o = St.beat[e];
                                        t(i, St.timelineTickFor(o[1])) && St.selectedBeats.push(e)
                                    }
                                }
                            }
                        }
                        St.beatNSM.pages[0].items.push({
                            type: "number",
                            name: "edit_select_item_time",
                            hint: "edit_select_item_time_sub",
                            var: [St.beat[St.selectedBeats[0]], "1"],
                            min: !1,
                            max: !1,
                            bigChange: 1,
                            smallChange: [St, "snap"],
                            display: function() {
                                return Xt({
                                    recieve: "bpm",
                                    time: St.beat[St.selectedBeats[0]][1],
                                    bpm: St.beat[St.selectedBeats[0]][9],
                                    offset: St.beat[St.selectedBeats[0]][10],
                                    lvlBPM: St.bpm
                                })
                            },
                            update: function(e) {
                                e.bigChange = Xt({
                                    recieve: "raw",
                                    time: 1,
                                    bpm: St.beat[St.selectedBeats[0]][9],
                                    offset: 0,
                                    lvlBPM: St.bpm
                                }),
                                e.smallChange = Xt({
                                    recieve: "raw",
                                    time: St.snap,
                                    bpm: St.beat[St.selectedBeats[0]][9],
                                    offset: 0,
                                    lvlBPM: St.bpm
                                })
                            },
                            convert: function(e) {
                                return Xt({
                                    recieve: "raw",
                                    time: e,
                                    bpm: St.beat[St.selectedBeats[0]][9],
                                    offset: St.beat[St.selectedBeats[0]][10],
                                    lvlBPM: St.bpm
                                })
                            }
                        }, {
                            type: "number",
                            name: "edit_select_item_bpm",
                            hint: "edit_select_item_bpm_sub",
                            var: [St.beat[St.selectedBeats[0]], "9"],
                            min: 0,
                            max: !1,
                            bigChange: 10,
                            smallChange: 1
                        }, {
                            type: "number",
                            name: "edit_select_item_offset",
                            hint: "edit_select_item_offset_sub",
                            var: [St.beat[St.selectedBeats[0]], "10"],
                            min: !1,
                            max: !1,
                            bigChange: 10,
                            smallChange: 1
                        }),
                        1 === St.beat[St.selectedBeats[0]][5] && St.beatNSM.pages[0].items.push({
                            type: "number",
                            name: "edit_tool_object_holdLength",
                            hint: "edit_tool_object_holdLength_sub",
                            var: [St.beat[St.selectedBeats[0]], "6"],
                            min: 0,
                            max: !1,
                            bigChange: 1,
                            smallChange: [St, "snap"],
                            display: function() {
                                return Xt({
                                    recieve: "bpm",
                                    time: St.beat[St.selectedBeats[0]][6],
                                    bpm: St.beat[St.selectedBeats[0]][9],
                                    offset: 0,
                                    lvlBPM: St.bpm
                                })
                            },
                            update: function(e) {
                                e.bigChange = Xt({
                                    recieve: "raw",
                                    time: 1,
                                    bpm: St.beat[St.selectedBeats[0]][9],
                                    offset: 0,
                                    lvlBPM: St.bpm
                                }),
                                e.smallChange = Xt({
                                    recieve: "raw",
                                    time: St.snap,
                                    bpm: St.beat[St.selectedBeats[0]][9],
                                    offset: 0,
                                    lvlBPM: St.bpm
                                })
                            },
                            convert: function(e) {
                                return Xt({
                                    recieve: "raw",
                                    time: e,
                                    bpm: St.beat[St.selectedBeats[0]][9],
                                    offset: 0,
                                    lvlBPM: St.bpm
                                })
                            }
                        }),
                        St.beatNSM.pages[0].items.push({
                            type: "color",
                            name: "edit_select_item_beatColor",
                            hint: "edit_select_item_beatColor_sub",
                            mode: HSB,
                            hue: [St.beat[St.selectedBeats[0]], "11"],
                            saturation: [St.beat[St.selectedBeats[0]], "16"],
                            brightness: [St.beat[St.selectedBeats[0]], "17"]
                        }, {
                            name: "edit_select_item_transitionIn",
                            type: "dropdown",
                            hint: "edit_select_item_transitionIn_sub",
                            var: [St.beat[St.selectedBeats[0]], "13"],
                            options: ut,
                            labels: St.transitionNames
                        }, {
                            name: "edit_select_item_transitionOut",
                            type: "dropdown",
                            hint: "edit_select_item_transitionOut_sub",
                            var: [St.beat[St.selectedBeats[0]], "14"],
                            options: ut,
                            labels: St.transitionNames
                        }),
                        St.beatNSM.pages.push({
                            title: "edit_select_quickSelect",
                            items: []
                        }),
                        St.beatNSM.pages.at(-1).items.push({
                            type: "button",
                            name: "edit_select_item_selectBefore",
                            hint: "edit_select_item_selectBefore_sub",
                            event: ()=>vt((e,t)=>t <= e)
                        }, {
                            type: "button",
                            name: "edit_select_item_selectCurrent",
                            hint: "edit_select_item_selectCurrent_sub",
                            event: ()=>vt((e,t)=>t === e)
                        }, {
                            type: "button",
                            name: "edit_select_item_selectAfter",
                            hint: "edit_select_item_selectAfter_sub",
                            event: ()=>vt((e,t)=>e <= t)
                        })
                    } if(St.selectedBeats.length!==0) {
                        function selectInBetween() {
                            St.selectedBeats.sort((a, b) => a-b)
                            var lBound = St.selectedBeats[0];
                            var uBound = St.selectedBeats[St.selectedBeats.length-1];
                            if(lBound!==undefined && uBound!== undefined) {
                                for(let i = lBound; i<uBound; i++) {
                                    if(St.beat[i]!==undefined && !St.selectedBeats.includes(i)) {
                                        St.selectedBeats.push(i)
                                    }
                                }
                            }
                        }
                        if(St.selectedBeats.length>1){
                        St.beatNSM.pages.push({
                            title: "edit_select_quickSelect",
                            items: []
                        })}
                        St.beatNSM.pages.at(-1).items.push({
                            type: "button",
                            name: "edit_select_item_selectBetween",
                            hint: "edit_select_item_selectBetween_sub",
                            event: ()=>selectInBetween()
                        })
                     } else {
                        for (var mt = !1, i = 0; i < St.selectedBeats.length; i++)
                            if (0 === St.beat[St.selectedBeats[i]][5]) {
                                mt = !0;
                                break
                            }
                        St.beatNSM.pages[0].items.push({
                            type: "number",
                            name: "edit_select_item_time",
                            hint: "edit_select_item_time_sub",
                            min: !1,
                            max: !1,
                            bigChange: 1,
                            smallChange: [St, "snap"],
                            multiple: !0,
                            vars: I.time,
                            update: function(e) {
                                e.bigChange = Xt({
                                    recieve: "raw",
                                    time: 1,
                                    bpm: St.timelineBPM,
                                    offset: 0,
                                    lvlBPM: St.bpm
                                }),
                                e.smallChange = Xt({
                                    recieve: "raw",
                                    time: St.snap,
                                    bpm: St.timelineBPM,
                                    offset: 0,
                                    lvlBPM: St.bpm
                                })
                            }
                        }),
                        mt || St.beatNSM.pages[0].items.push({
                            type: "number",
                            name: "edit_tool_object_holdLength",
                            hint: "edit_tool_object_holdLength_sub",
                            min: 0,
                            max: !1,
                            bigChange: 1,
                            smallChange: [St, "snap"],
                            multiple: !0,
                            vars: I.holdLength,
                            update: function(e) {
                                e.bigChange = Xt({
                                    recieve: "raw",
                                    time: 1,
                                    bpm: St.timelineBPM,
                                    offset: 0,
                                    lvlBPM: St.bpm
                                }),
                                e.smallChange = Xt({
                                    recieve: "raw",
                                    time: St.snap,
                                    bpm: St.timelineBPM,
                                    offset: 0,
                                    lvlBPM: St.bpm
                                })
                            }
                        }),
                        St.beatNSM.pages[0].items.push({
                            type: "color",
                            name: "edit_select_item_beatColor",
                            hint: "edit_select_item_beatColor_sub",
                            mode: HSB,
                            multiple: !0,
                            hues: I.beatColor,
                            saturations: I.beatSaturation,
                            brightnesses: I.beatBrightness
                        })
                    }
                    St.beatNSM.pages[0].items.push({
                        type: "button",
                        name: "edit_select_item_copy",
                        event: En,
                        hint: "edit_select_item_copy_sub"
                    }, {
                        type: "button",
                        name: "edit_effects_item_deselectAutomation",
                        event: function() {
                            St.selectedBeats = []
                        },
                        hint: "edit_effects_item_deselectAutomation_sub"
                    }),
                    St.beatNSM.pages[1].items.push({
                        type: "button",
                        name: "edit_select_item_rotateCW",
                        hint: "edit_select_item_rotateCW_sub",
                        event: ()=>rr([2, 5, 8, 1, 4, 7, 0, 3, 6])
                    }, {
                        type: "button",
                        name: "edit_select_item_rotateCCW",
                        hint: "edit_select_item_rotateCCW_sub",
                        event: ()=>rr([6, 3, 0, 7, 4, 1, 8, 5, 2])
                    }, {
                        type: "button",
                        name: "edit_select_item_cycleCW",
                        hint: "edit_select_item_cycleCW_sub",
                        event: ()=>rr([1, 2, 5, 0, 4, 8, 3, 6, 7])
                    }, {
                        type: "button",
                        name: "edit_select_item_cycleCCW",
                        hint: "edit_select_item_cycleCCW_sub",
                        event: ()=>rr([3, 0, 1, 6, 4, 2, 7, 8, 5])
                    }, {
                        type: "button",
                        name: "edit_select_item_flipH",
                        hint: "edit_select_item_flipH_sub",
                        event: ()=>rr([2, 1, 0, 5, 4, 3, 8, 7, 6])
                    }, {
                        type: "button",
                        name: "edit_select_item_flipV",
                        hint: "edit_select_item_flipV_sub",
                        event: ()=>rr([6, 7, 8, 3, 4, 5, 0, 1, 2])
                    }),
                    1 === St.selectedBeats.length && St.beatNSM.pages[0].items.push({
                        type: "button",
                        name: "edit_effects_item_deleteAutomation",
                        event: function() {
                            St.beat.splice(St.selectedBeats[0], 1),
                            St.selectedBeats = []
                        },
                        hint: "edit_effects_item_deleteAutomation_sub"
                    }),
                    1 < St.selectedBeats.length && St.beatNSM.pages[0].items.push({
                        type: "button",
                        name: "edit_delete_multiple",
                        keys: [String(St.selectedBeats.length)],
                        hint: "edit_effects_item_deleteAutomation_sub",
                        event: ()=>{
                            Yo.activate("edit_delete_confirmNotes", [String(St.selectedBeats.length)], ()=>{
                                const t = Symbol();
                                for (const e of St.selectedBeats)
                                    St.beat[e] = t;
                                St.beat = St.beat.filter(e=>e !== t),
                                St.selectedBeats = []
                            }
                            )
                        }
                    }),
                    St.sbeatsLast = St.selectedBeats.concat()
                }
                St.beatNSM.draw({
                    x: width - width / 4,
                    y: height / 16 * 3,
                    width: width / 4,
                    height: height / 16 * 10,
                    stacked: !0,
                    maxBarHeight: height / 16 / 1.25,
                    buffer: height / 16 * 12 / 128
                })
            }
        } else
            fill(0, 0, 0, 200),
            rectMode(CORNER),
            noStroke(),
            rect(width - width / 4, height / 16 * 3, width / 2, height / 16 * 10, (width < height ? width : height) / 32),
            Xi(St.sectionsSelectedLast, St.sectionsSelected) || (St.sectionsNSM.pages = [{
                title: "edit_sections_information",
                items: []
            }],
            St.sectionsNSM.pages[0].items.push({
                type: "number",
                name: "edit_effects_item_startTime",
                hint: "edit_effects_item_startTime_sub",
                min: !1,
                max: !1,
                var: [St.sections[St.sectionsSelected[0]], "time"],
                bigChange: 1,
                smallChange: [St, "snap"],
                display: function() {
                    return Xt({
                        recieve: "bpm",
                        time: St.sections[St.sectionsSelected[0]].time,
                        bpm: St.sections[St.sectionsSelected[0]].bpm,
                        offset: St.sections[St.sectionsSelected[0]].offset,
                        lvlBPM: St.bpm
                    })
                },
                update: function(e) {
                    e.bigChange = Xt({
                        recieve: "raw",
                        time: 1,
                        bpm: St.sections[St.sectionsSelected[0]].bpm,
                        offset: 0,
                        lvlBPM: St.bpm
                    }),
                    e.smallChange = Xt({
                        recieve: "raw",
                        time: St.snap,
                        bpm: St.sections[St.sectionsSelected[0]].bpm,
                        offset: 0,
                        lvlBPM: St.bpm
                    })
                },
                convert: function(e) {
                    return Xt({
                        recieve: "raw",
                        time: e,
                        bpm: St.sections[St.sectionsSelected[0]].bpm,
                        offset: St.sections[St.sectionsSelected[0]].offset,
                        lvlBPM: St.bpm
                    })
                }
            }, {
                type: "number",
                name: "edit_select_item_bpm",
                hint: "edit_select_item_bpm_sub",
                var: [St.sections[St.sectionsSelected[0]], "bpm"],
                min: 0,
                max: !1,
                bigChange: 10,
                smallChange: 1
            }, {
                type: "number",
                name: "edit_select_item_offset",
                hint: "edit_select_item_offset_sub",
                var: [St.sections[St.sectionsSelected[0]], "offset"],
                min: !1,
                max: !1,
                bigChange: 10,
                smallChange: 1
            }, {
                type: "string",
                name: "edit_sections_name",
                hint: "edit_sections_name_sub",
                var: [St.sections[St.sectionsSelected[0]], "name"]
            }, {
                type: "color",
                name: "edit_effects_item_displayColor",
                hint: "edit_effects_item_displayColor_sub",
                mode: HSB,
                hue: [St.sections[St.sectionsSelected[0]], "color"],
                saturation: [St.sections[St.sectionsSelected[0]], "saturation"],
                brightness: [St.sections[St.sectionsSelected[0]], "brightness"]
            }, {
                type: "boolean",
                name: "edit_sections_visible",
                hint: "edit_sections_visible_sub",
                var: [St.sections[St.sectionsSelected[0]], "visible"]
            }, {
                type: "button",
                name: "edit_sections_align",
                hint: "edit_sections_align_sub",
                event: ()=>{
                    var e = St.sectionsSelected[0];
                    void 0 !== e && (e = St.sections[e]) && (St.timelineBPM = e.bpm,
                    St.timelineOffset = e.offset)
                }
            }, {
                type: "button",
                name: "edit_effects_item_deselectAutomation",
                event: function() {
                    St.sectionsSelected = []
                },
                hint: "edit_effects_item_deselectAutomation_sub"
            }, {
                type: "button",
                name: "edit_effects_item_deleteAutomation",
                event: function() {
                    St.sections.splice(St.sectionsSelected[0], 1),
                    St.sectionsSelected = []
                },
                hint: "edit_effects_item_deleteAutomation_sub"
            }),
            St.sectionsSelectedLast = St.sectionsSelected.concat()),
            St.sectionsNSM.draw({
                x: width - width / 4,
                y: height / 16 * 3,
                width: width / 4,
                height: height / 16 * 10,
                stacked: !0,
                maxBarHeight: height / 16 / 1.25,
                buffer: height / 16 * 12 / 128
            });
        if (St.showGUI && (fill(255, 200),
        textAlign(LEFT, BOTTOM),
        textSize(Rt / 2),
        text(Yt("edit_hint_keybinds_array", Pt).join("\n"), Rt, height - (height / 16 + Rt)),
        fill(lerp(0, 25, St.menuSize), lerp(200, 255, St.menuSize)),
        rectMode(CORNER),
        noStroke(),
        rect(0, height - height / 16 * St.headerY, width, lerp(height / 16 * -(St.toolsH + 1), -height, St.menuSize))),
        St.tools[1][3] = [],
        0 === St.objType ? (St.tools[1][0] = "edit_tool_object_beat",
        St.tools[1][1] = xt.objectBeat,
        St.tools[1][4] = "edit_tool_object_beat") : (St.tools[1][0] = "edit_tool_object_hold",
        St.tools[1][1] = xt.objectHold,
        St.tools[1][3].push(["edit_tool_object_holdLengthVal", xt.objectHoldTime, 0, !1, !1, [St.holdLength]]),
        St.tools[1][4] = "edit_tool_object_hold"),
        St.tools[1][3].push(["edit_tool_object_beatColor", xt.beatColor, 0, !1, !1, [St.beatColor, St.beatSaturation, St.beatBrightness]], ["edit_tool_object_transitionIn", xt.beatTransitionIn, 0, !1, !1, [St.transitionNames[St.transitionIn]]], ["edit_tool_object_transitionOut", xt.beatTransitionOut, 0, !1, !1, [St.transitionNames[St.transitionOut]]]),
        .5 === St.playbackRate ? St.tools[2][1] = xt.playbackHalf : St.tools[2][1] = xt.playbackFull,
        0 === St.editorMode ? (St.tools[7][0] = "edit_tool_mode_gameplay",
        St.tools[7][1] = xt.editorModeGameplay) : (St.tools[7][0] = "edit_tool_mode_effects",
        St.tools[7][1] = xt.editorModeEffects),
        St.tools[2][0] = "edit_tool_playback",
        St.tools[2][5] = [St.playbackRate],
        void 0 !== kt[St.song] && kt[St.song].rate(St.playbackRate),
        St.tools[3][0] = "edit_tool_timeline",
        St.tools[3][1] = xt.timelineTools,
        St.tools[3][4] = "edit_tool_timeline",
        St.tools[3][3] = [],
        St.tools[3][3].push(["edit_tool_snap", xt.timelineSnap, 0, !1, !1, ["1/" + Ot(1 / St.snap)]], ["edit_tool_bpm", xt.metronome, 0, !1, !1, [St.timelineBPM]], ["edit_tool_bpm_offset", xt.timelineOffset, 0, !1, !1, [Et("milliseconds_short", Pt, St.timelineOffset)]], ["edit_tool_section", xt.bookmark, 0], ["edit_tool_timestamp", xt.jumpToTimestamp, 0]),
        "scroll" === St.timelineMode ? (St.tools[4][0] = "edit_tool_timelineMode",
        St.tools[4][1] = xt.clickModeScroll,
        St.tools[4][5] = [Et("edit_timelineMode_scroll", Pt)],
        St.selectedBeats = [],
        St.sectionsSelected = []) : "select" === St.timelineMode && (St.tools[4][0] = "edit_tool_timelineMode",
        St.tools[4][1] = xt.clickModeSelect,
        St.tools[4][5] = [Et("edit_timelineMode_select", Pt)]),
        St.saveNoticeDis += It(St.saveNotice, St.saveNoticeDis, .15),
        Ot(100 * St.saveNoticeDis) / 100 == 1 && (St.saveNotice = 0),
        textAlign(RIGHT, TOP),
        fill(255),
        Ft(Et("edit_menu_item_saved", Pt), width - Rt, height + 2 * Rt - St.saveNoticeDis * (6 * Rt), width, Rt),
        !1 === St.menu) {
            if (St.saved = !1,
            St.showGUI)
                for (i = 0; i < St.tools.length; i++) {
                    if (At("rcorner", width / St.tools.length * i, height - height / 16 * St.headerY, width / St.tools.length, height / 16 * -(St.toolsH + 1) * (!1 !== St.tools[i][3] ? +St.tools[i][2] + 1 : 1)) ? St.tools[i][2] += It(1, St.tools[i][2], .2) : St.tools[i][2] += It(0, St.tools[i][2], .1),
                    !1 !== St.tools[i][3])
                        for (mt = !1,
                        t = 0; t < St.tools[i][3].length + 1; t++)
                            t < St.tools[i][3].length ? At("rcorner", width / St.tools.length * i + width / St.tools.length / St.tools[i][3].length * t, height - height / 32 * (St.toolsH + 1) * (4 * St.tools[i][2]), width / St.tools.length / St.tools[i][3].length, height / 16 * (St.toolsH + 1)) ? (St.tools[i][3][t][2] += It(1, St.tools[i][3][t][2], .2),
                            St.tools[i][0] = St.tools[i][3][t][0],
                            St.tools[i][5] = St.tools[i][3][t][5],
                            mt = !0) : St.tools[i][3][t][2] += It(0, St.tools[i][3][t][2], .2) : !1 === mt && (St.tools[i][0] = St.tools[i][4]);
                    textSize(height / 32 * (St.toolsH + 1));
                    var pt = ""
                      , pt = void 0 !== St.tools[i][5] ? Et(St.tools[i][0], Pt, St.tools[i][5][0], St.tools[i][5][1], St.tools[i][5][2], St.tools[i][5][3], St.tools[i][5][4]) : Et(St.tools[i][0], Pt)
                      , bt = width / St.tools.length * i
                      , wt = textWidth(pt) + height / 32 * (St.toolsH + 1)
                      , Ct = 1;
                    if ((bt = bt < height / 32 * (St.toolsH + 1) / 2 ? height / 32 * (St.toolsH + 1) / 2 : bt) + wt > width - height / 32 * (St.toolsH + 1) / 2 && (bt = width - height / 32 * (St.toolsH + 1) / 2 - wt),
                    !1 !== St.tools[i][3] && (Ct = 1.5),
                    fill(25, 255),
                    ellipseMode(CORNER),
                    rect(bt, height - height / 32 * (St.toolsH + 1) * (4 * Ct * St.tools[i][2]), wt, height / 32 * (St.toolsH + 1) * 1.5, height / 32 * (St.toolsH + 1) * 2),
                    fill(255),
                    textAlign(CENTER, CENTER),
                    text(pt, bt + (textWidth(pt) + height / 32 * (St.toolsH + 1)) / 2, height - height / 32 * (St.toolsH + 1) * (4 * Ct * St.tools[i][2]) + height / 32 * (St.toolsH + 1) * 1.5 / 2),
                    !1 !== St.tools[i][3]) {
                        rectMode(CORNER),
                        fill(0, 200 * St.tools[i][2]),
                        rect(width / St.tools.length * i, height - height / 32 * (St.toolsH + 1) * (4 * St.tools[i][2]), width / St.tools.length, height / 16 * (St.toolsH + 1));
                        for (t = 0; t < St.tools[i][3].length; t++)
                            fill(25, 255 * St.tools[i][3][t][2] * St.tools[i][3].length),
                            rect(width / St.tools.length * i + width / St.tools.length / St.tools[i][3].length * t, height - height / 32 * (St.toolsH + 1) * (4 * St.tools[i][2]), width / St.tools.length / St.tools[i][3].length, height / 16 * (St.toolsH + 1)),
                            imageMode(CENTER),
                            smooth(),
                            image(St.tools[i][3][t][1], width / St.tools.length * i + width / St.tools.length / St.tools[i][3].length * t + width / St.tools.length / St.tools[i][3].length / 2, height - height / 32 * (St.toolsH + 1) * (4 * St.tools[i][2]) + height / 16 * (St.toolsH + 1) / 2, height / 16 * -(St.toolsH + 1) / 1.5, height / 16 * -(St.toolsH + 1) / 1.5)
                    }
                    rectMode(CORNER),
                    fill(25, 255 * St.tools[i][2]),
                    rect(width / St.tools.length * i, height - height / 16 * St.headerY, width / St.tools.length, height / 16 * -(St.toolsH + 1)),
                    imageMode(CENTER),
                    image(St.tools[i][1], width / St.tools.length * i + width / St.tools.length / 2, height - height / 16 * St.headerY + height / 16 * -(St.toolsH + 1) / 2, height / 16 * -(St.toolsH + 1) / 1.5, height / 16 * -(St.toolsH + 1) / 1.5)
                }
        } else
            St.playing && _o(),
            rectMode(CORNER),
            St.menuNSM.draw({
                x: 0,
                y: 0,
                width: width,
                height: height,
                stacked: !1,
                maxBarHeight: height / 15,
                buffer: (height - height / 16) / 64
            }),
            St.ar = St.bpm / 60 / 2 * St.oldAr,
            St.arInit = St.ar,
            push(),
            translate(width * (1 - (St.menuHLX / (width / (St.menuItems.length + 1)) - 1)), 0),
            textAlign(CENTER, CENTER),
            fill(255),
            !0 !== Ut(St.song, "id").error && void 0 === kt[St.song] && (_t = $t = !1,
            so(St.song)),
            pop(),
            rectMode(CENTER),
            fill(255),
            rect(width / St.tools.length * (St.tools.length - 1) + width / St.tools.length / 2, height - height / 16 + height / 16 / 2, width / St.tools.length, height / 16, height / 64, 0, 0, 0),
            fill(0),
            textAlign(CENTER, CENTER),
            Ft(Et("menu_close", Pt), width / St.tools.length * (St.tools.length - 1) + width / St.tools.length / 2, height - height / 16 + height / 16 / 2, width / St.tools.length * .75, height / 16 * .75),
            St.exiting && (rectMode(CORNER),
            fill(0, 200),
            rect(0, 0, width, height),
            textAlign(CENTER, CENTER),
            fill(255),
            Ft(Et("edit_menu_item_confirmExit", Pt), width / 2, height / 4 * 1.5, width / 1.5, height / 4),
            H = (width / 2 - 2 * Rt) / 1.5,
            R = height / 4 / 1.5,
            Lt(width / 4 - H / 2, height / 4 * 2.5 - R / 4, H, R, Et("edit_menu_item_confirmExit_yes", Pt), St.buttonHover, 2),
            Lt(width / 4 * 3 - H / 2, height / 4 * 2.5 - R / 4, H, R, Et("edit_menu_item_confirmExit_no", Pt), St.buttonHover, 3));
        if (Mt && (Ht = [],
        Ht = Wo(Tt.saved, "dateDesc"),
        Gi(Tt.saved.indexOf(Ht[St.lvlSel])),
        Mt = !1),
        qt && !1 === St.menu && !Nt.active && (0 === St.editorMode ? 0 < St.selectedBeats.length && En() : 1 === St.editorMode && 0 < St.effectMultiSel.length && En(),
        qt = !1),
        Zt && !1 === St.menu && !Nt.active && (On(),
        Zt = !1),
        0 !== Vt())
            for (var yt = Ot(Vt() / 33 / 4), i = 0; i < abs(yt); i++)
                Ln(yt < 0 ? "LEFT" : "RIGHT", jt, Gt);
        Kt *= .25,
        colorMode(HSB),
        fill(St.beatColor, St.beatSaturation, St.beatBrightness, 200),
        "scroll" === St.timelineMode && 0 === St.editorMode ? 0 === St.objType ? rect(mouseX - .5 * Rt, mouseY + .625 * Rt, Rt / 3, Rt / 3) : 1 === St.objType && (ellipseMode(CORNER),
        ellipse(mouseX - .5 * Rt, mouseY + .625 * Rt, Rt / 3, Rt / 3),
        textAlign(RIGHT, CENTER),
        textSize(Rt / 2),
        text(St.holdLength, mouseX - .75 * Rt, mouseY + .625 * Rt + Rt / 3 / 2)) : "select" === St.timelineMode && (colorMode(RGB),
        fill(255),
        imageMode(CORNER),
        image(xt.select, mouseX - .5 * Rt, mouseY + .625 * Rt, Rt / 3, Rt / 3),
        textAlign(RIGHT, CENTER),
        textSize(Rt / 2),
        0 < St.selectedBeats.length && 0 === St.editorMode ? text(St.selectedBeats.length, mouseX - .75 * Rt, mouseY + .625 * Rt + Rt / 3 / 2) : 0 < St.effectMultiSel.length && 1 === St.editorMode ? text(St.effectMultiSel.length, mouseX - .75 * Rt, mouseY + .625 * Rt + Rt / 3 / 2) : 0 < St.sectionsSelected.length && text(St.sectionsSelected.length, mouseX - .75 * Rt, mouseY + .625 * Rt + Rt / 3 / 2))
    }
    colorMode(RGB)
}

});