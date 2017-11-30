// ==UserScript==
// @name         Student Evalutation of Teaching Auto-Answer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  auto-fill up radio and check boxes
// @author       John Marlo Evangelista
// @match        http://*/*
// @grant        none
// @include        https://crs.upd.edu.ph/*
// ==/UserScript==

(function() {
    'use strict';

//Begin
    $("input[name='chk_read']").prop ('checked', true);
    $("input[name='btn_submit']").prop ('style', "display: inline-block;");

//THE STUDENT
    $("input[name='question_1'][value='1']").prop ('checked', true);
    $("input[name='question_2'][value='1']").prop ('checked', true);
    $("input[name='question_3'][value='1']").prop ('checked', true);
    $("input[name='question_4'][value='1']").prop ('checked', true);
    $("input[name='question_5'][value='1']").prop ('checked', true);
    $("input[name='question_6'][value='1']").prop ('checked', true);

    $("input[name='question_7'][value='12']").prop ('checked', true);
    $("input[name='question_8'][value='12']").prop ('checked', true);

    $("input[name='question_9'][value='18']").prop ('checked', true);

//PART 2
    $("input[name='question_10'][value='7']").prop ('checked', true);
    $("input[name='question_11'][value='7']").prop ('checked', true);
    $("input[name='question_12'][value='7']").prop ('checked', true);
    $("input[name='question_13'][value='7']").prop ('checked', true);
    $("input[name='question_14'][value='7']").prop ('checked', true);
    $("input[name='question_15'][value='7']").prop ('checked', true);
    $("input[name='question_16'][value='7']").prop ('checked', true);

    $("input[name='question_17'][value='31']").prop ('checked', true);
    $("tr[id='18']").prop ('style', "display: table-row;");
    $("input[name='question_18'][value='32']").prop ('checked', true);
    $("input[name='question_21'][value='35']").prop ('checked', true);

    $("input[name='question_22'][value='38']").prop ('checked', true);
    $("input[name='question_23'][value='38']").prop ('checked', true);

//PART 3
    $("input[name='question_26'][value='74']").prop ('checked', true);
    $("input[name='question_27'][value='76']").prop ('checked', true);
    $("input[name='question_28'][value='74']").prop ('checked', true);
    $("input[name='question_29'][value='74']").prop ('checked', true);
    $("input[name='question_30'][value='74']").prop ('checked', true);
    $("input[name='question_31'][value='74']").prop ('checked', true);
    $("input[name='question_32'][value='76']").prop ('checked', true);
    $("input[name='question_33'][value='74']").prop ('checked', true);
    $("input[name='question_34'][value='74']").prop ('checked', true);
    $("input[name='question_35'][value='76']").prop ('checked', true);
    $("input[name='question_36'][value='74']").prop ('checked', true);
    $("input[name='question_37'][value='74']").prop ('checked', true);
    $("input[name='question_38'][value='74']").prop ('checked', true);
    $("input[name='question_39'][value='74']").prop ('checked', true);
    $("input[name='question_40'][value='74']").prop ('checked', true);
    $("input[name='question_41'][value='74']").prop ('checked', true);
    $("input[name='question_42'][value='76']").prop ('checked', true);
    $("input[name='question_43'][value='74']").prop ('checked', true);
    $("input[name='question_44'][value='76']").prop ('checked', true);
    $("input[name='question_45'][value='74']").prop ('checked', true);
    $("input[name='question_46'][value='74']").prop ('checked', true);
    $("input[name='question_47'][value='74']").prop ('checked', true);
    $("input[name='question_48'][value='76']").prop ('checked', true);
    $("input[name='question_49'][value='74']").prop ('checked', true);
    $("input[name='question_50'][value='76']").prop ('checked', true);
    $("input[name='question_51'][value='74']").prop ('checked', true);

    $("input[name='question_52'][value='12']").prop ('checked', true);
    $("input[name='question_53'][value='12']").prop ('checked', true);
    $("input[name='question_54'][value='45']").prop ('checked', true);
    $("input[name='question_55[]'][value='49']").prop ('checked', true);
    $("input[name='question_56'][value='56']").prop ('checked', true);
    $("input[name='question_57'][value='62']").prop ('checked', true);

    $("input[name='question_408'][value='69']").prop ('checked', true);
})();
