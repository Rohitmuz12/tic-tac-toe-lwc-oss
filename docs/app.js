!(function (e) {
    function t(t) {
        for (
            var a, i, r = t[0], l = t[1], c = t[2], m = 0, h = [];
            m < r.length;
            m++
        )
            (i = r[m]),
                Object.prototype.hasOwnProperty.call(n, i) &&
                    n[i] &&
                    h.push(n[i][0]),
                (n[i] = 0);
        for (a in l)
            Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
        for (d && d(t); h.length; ) h.shift()();
        return o.push.apply(o, c || []), s();
    }
    function s() {
        for (var e, t = 0; t < o.length; t++) {
            for (var s = o[t], a = !0, r = 1; r < s.length; r++) {
                var l = s[r];
                0 !== n[l] && (a = !1);
            }
            a && (o.splice(t--, 1), (e = i((i.s = s[0]))));
        }
        return e;
    }
    var a = {},
        n = { 1: 0 },
        o = [];
    function i(t) {
        if (a[t]) return a[t].exports;
        var s = (a[t] = { i: t, l: !1, exports: {} });
        return e[t].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
    }
    (i.m = e),
        (i.c = a),
        (i.d = function (e, t, s) {
            i.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: s });
        }),
        (i.r = function (e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module'
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (i.t = function (e, t) {
            if ((1 & t && (e = i(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var s = Object.create(null);
            if (
                (i.r(s),
                Object.defineProperty(s, 'default', {
                    enumerable: !0,
                    value: e
                }),
                2 & t && 'string' != typeof e)
            )
                for (var a in e)
                    i.d(
                        s,
                        a,
                        function (t) {
                            return e[t];
                        }.bind(null, a)
                    );
            return s;
        }),
        (i.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return i.d(t, 'a', t), t;
        }),
        (i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (i.p = './');
    var r = (window.webpackJsonp = window.webpackJsonp || []),
        l = r.push.bind(r);
    (r.push = t), (r = r.slice());
    for (var c = 0; c < r.length; c++) t(r[c]);
    var d = l;
    o.push([28, 0, 2]), s();
})({
    28: function (e, t, s) {
        e.exports = s(58);
    },
    55: function (e, t) {},
    58: function (e, t, s) {
        'use strict';
        s.r(t);
        s(29);
        var a = s(0);
        var n = [
            function (e, t, s) {
                return [
                    '.center',
                    t,
                    '{text-align:center}.link',
                    t,
                    '{border:none;padding:10px;border-radius:5px;text-decoration:none;background-color:#ff6000;color:#fff;margin-left:33%;margin-right:33%;display:inline-block;margin-top:1em}.info',
                    t,
                    '{color:#000;background-color:#e4f2f8;margin:auto;padding:15px 10px;text-align:left;width:300px;border-radius:5px}.code',
                    t,
                    '{font-family:monospace}.container',
                    t,
                    '{margin-top:30px}img',
                    t,
                    '{max-width:150px}.greeting',
                    t,
                    '{height:75px}'
                ].join('');
            }
        ];
        var o = [
            function (e, t, s) {
                return [
                    '.header',
                    t,
                    '{background:#fa7474;color:#fff;font-size:1rem}.game-container',
                    t,
                    '{padding:5%;background-color:#9e8e79}.blank',
                    t,
                    '{background-color:transparent;color:transparent}.white',
                    t,
                    '{background-color:#fff;color:#000}.black',
                    t,
                    '{background-color:#000;color:#fff}.gameBlock',
                    t,
                    '{height:350px;width:350px;margin-left:37%}.slds-wrap',
                    t,
                    ' div',
                    t,
                    '{height:100px;width:100px!important;border:1px solid #000;display:inline-block}.symbol',
                    t,
                    '{margin-left:16%;font-size:6em;display:inline-block}.overlay',
                    t,
                    '{position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(158,142,121,.9);z-index:2}.overlay-content',
                    t,
                    '{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.overlayToStop',
                    t,
                    '{position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(158,142,121,.4);z-index:2}.custom-loading-text',
                    t,
                    '{color:#a8eca8;transform:rotate(-90deg);font-size:large;position:absolute;top:-.5rem;left:-1rem;white-space:pre;text-align:center}.custom-loading-text-1',
                    t,
                    '{color:#d23a48;font-size:xx-large;padding:0 135px;white-space:pre;background:#60ea8b;border:1px solid #2b8c45;text-align:center}'
                ].join('');
            }
        ];
        var i = [
            function (e, t, s) {
                return [
                    '.textInput',
                    t,
                    '{-webkit-text-fill-color:#fff}.custom-loading-text',
                    t,
                    '{color:#a8eca8;transform:rotate(-90deg);font-size:large;position:absolute;top:-1.5rem;left:-2rem;white-space:pre;text-align:center}'
                ].join('');
            }
        ];
        function r(e, t, s, a) {
            const { t: n, b: o, h: i, gid: r, d: l } = e,
                {
                    _m0: c,
                    _m1: d,
                    _m2: m,
                    _m3: h,
                    _m4: p,
                    _m5: g,
                    _m6: u,
                    _m7: y,
                    _m8: v,
                    _m9: b,
                    _m10: f,
                    _m11: k,
                    _m12: _,
                    _m13: w
                } = a;
            return [
                i(
                    'div',
                    {
                        classMap: {
                            'slds-m-top_small': !0,
                            'slds-m-bottom_medium': !0
                        },
                        key: 32
                    },
                    [
                        t.isNoActiveGame
                            ? i('div', { key: 2 }, [
                                  i(
                                      'button',
                                      {
                                          classMap: {
                                              'slds-button': !0,
                                              'slds-button_brand': !0,
                                              'slds-m-left_x-small': !0
                                          },
                                          attrs: {
                                              variant: 'brand',
                                              label: 'Create game'
                                          },
                                          key: 0,
                                          on: {
                                              click:
                                                  c || (a._m0 = o(t.createGame))
                                          }
                                      },
                                      [n('Create game')]
                                  ),
                                  i(
                                      'button',
                                      {
                                          classMap: {
                                              'slds-button': !0,
                                              'slds-button_brand': !0,
                                              'slds-m-left_x-small': !0
                                          },
                                          key: 1,
                                          on: {
                                              click:
                                                  d || (a._m1 = o(t.joinAGame))
                                          }
                                      },
                                      [n('Join game')]
                                  )
                              ])
                            : null,
                        t.isCreateGame
                            ? i('div', { key: 20 }, [
                                  i(
                                      'radiogroup',
                                      {
                                          classMap: {
                                              'slds-var-m-bottom_medium': !0
                                          },
                                          attrs: {
                                              name: 'channelGroup',
                                              label: 'Choose game type',
                                              options: t.channelOptions,
                                              value: t.value,
                                              type: 'radio'
                                          },
                                          key: 3,
                                          on: {
                                              change:
                                                  m ||
                                                  (a._m2 = o(
                                                      t.handleChannelOnchange
                                                  ))
                                          }
                                      },
                                      []
                                  ),
                                  i(
                                      'fieldset',
                                      {
                                          classMap: {
                                              'slds-form-element': !0,
                                              'slds-var-m-bottom_medium': !0
                                          },
                                          key: 16
                                      },
                                      [
                                          i(
                                              'legend',
                                              {
                                                  classMap: {
                                                      'slds-form-element__legend': !0,
                                                      'slds-form-element__label': !0
                                                  },
                                                  key: 4
                                              },
                                              [n('Choose game type')]
                                          ),
                                          i(
                                              'div',
                                              {
                                                  classMap: {
                                                      'slds-form-element__control': !0
                                                  },
                                                  key: 15
                                              },
                                              [
                                                  i(
                                                      'span',
                                                      {
                                                          classMap: {
                                                              'slds-radio': !0
                                                          },
                                                          key: 9
                                                      },
                                                      [
                                                          i(
                                                              'input',
                                                              {
                                                                  attrs: {
                                                                      type:
                                                                          'radio',
                                                                      id: r(
                                                                          'radio-43'
                                                                      ),
                                                                      name:
                                                                          'default'
                                                                  },
                                                                  props: {
                                                                      value:
                                                                          'online'
                                                                  },
                                                                  key: 5,
                                                                  on: {
                                                                      change:
                                                                          h ||
                                                                          (a._m3 = o(
                                                                              t.handleChannelOnchange
                                                                          ))
                                                                  }
                                                              },
                                                              []
                                                          ),
                                                          i(
                                                              'label',
                                                              {
                                                                  classMap: {
                                                                      'slds-radio__label': !0
                                                                  },
                                                                  attrs: {
                                                                      for:
                                                                          '' +
                                                                          r(
                                                                              'radio-43'
                                                                          )
                                                                  },
                                                                  key: 8
                                                              },
                                                              [
                                                                  i(
                                                                      'span',
                                                                      {
                                                                          classMap: {
                                                                              'slds-radio_faux': !0
                                                                          },
                                                                          key: 6
                                                                      },
                                                                      []
                                                                  ),
                                                                  i(
                                                                      'span',
                                                                      {
                                                                          classMap: {
                                                                              'slds-form-element__label': !0
                                                                          },
                                                                          key: 7
                                                                      },
                                                                      [
                                                                          n(
                                                                              'Play online'
                                                                          )
                                                                      ]
                                                                  )
                                                              ]
                                                          )
                                                      ]
                                                  ),
                                                  i(
                                                      'span',
                                                      {
                                                          classMap: {
                                                              'slds-radio': !0
                                                          },
                                                          key: 14
                                                      },
                                                      [
                                                          i(
                                                              'input',
                                                              {
                                                                  attrs: {
                                                                      type:
                                                                          'radio',
                                                                      id: r(
                                                                          'radio-44'
                                                                      ),
                                                                      name:
                                                                          'default'
                                                                  },
                                                                  props: {
                                                                      value:
                                                                          'offline'
                                                                  },
                                                                  key: 10,
                                                                  on: {
                                                                      change:
                                                                          p ||
                                                                          (a._m4 = o(
                                                                              t.handleChannelOnchange
                                                                          ))
                                                                  }
                                                              },
                                                              []
                                                          ),
                                                          i(
                                                              'label',
                                                              {
                                                                  classMap: {
                                                                      'slds-radio__label': !0
                                                                  },
                                                                  attrs: {
                                                                      for:
                                                                          '' +
                                                                          r(
                                                                              'radio-44'
                                                                          )
                                                                  },
                                                                  key: 13
                                                              },
                                                              [
                                                                  i(
                                                                      'span',
                                                                      {
                                                                          classMap: {
                                                                              'slds-radio_faux': !0
                                                                          },
                                                                          key: 11
                                                                      },
                                                                      []
                                                                  ),
                                                                  i(
                                                                      'span',
                                                                      {
                                                                          classMap: {
                                                                              'slds-form-element__label': !0
                                                                          },
                                                                          key: 12
                                                                      },
                                                                      [
                                                                          n(
                                                                              'Play N Pass'
                                                                          )
                                                                      ]
                                                                  )
                                                              ]
                                                          )
                                                      ]
                                                  )
                                              ]
                                          )
                                      ]
                                  ),
                                  i(
                                      'input',
                                      {
                                          classMap: {
                                              'slds-input': !0,
                                              'slds-var-m-bottom_medium': !0
                                          },
                                          attrs: {
                                              type: 'text',
                                              label: 'Your name'
                                          },
                                          props: { value: t.playerName },
                                          key: 17,
                                          on: {
                                              keyup:
                                                  g ||
                                                  (a._m5 = o(
                                                      t.handlePlayerName
                                                  )),
                                              change:
                                                  u ||
                                                  (a._m6 = o(
                                                      t.handlePlayerName
                                                  ))
                                          }
                                      },
                                      []
                                  ),
                                  t.offLine
                                      ? i(
                                            'input',
                                            {
                                                classMap: {
                                                    'slds-input': !0,
                                                    'slds-var-m-bottom_medium': !0
                                                },
                                                attrs: {
                                                    type: 'text',
                                                    label: 'Opponent name'
                                                },
                                                props: {
                                                    value: t.opponentName
                                                },
                                                key: 18,
                                                on: {
                                                    keyup:
                                                        y ||
                                                        (a._m7 = o(
                                                            t.handleOpponentName
                                                        )),
                                                    change:
                                                        v ||
                                                        (a._m8 = o(
                                                            t.handleOpponentName
                                                        ))
                                                }
                                            },
                                            []
                                        )
                                      : null,
                                  i(
                                      'button',
                                      {
                                          classMap: {
                                              'slds-button': !0,
                                              'slds-button_brand': !0,
                                              'slds-var-m-top_medium': !0
                                          },
                                          key: 19,
                                          on: {
                                              click:
                                                  b || (a._m9 = o(t.startGame))
                                          }
                                      },
                                      [n('Start Game')]
                                  )
                              ])
                            : null,
                        t.isJoinAGame
                            ? i('div', { key: 24 }, [
                                  i(
                                      'input',
                                      {
                                          classMap: {
                                              'slds-input': !0,
                                              'slds-var-m-bottom_medium': !0
                                          },
                                          attrs: {
                                              type: 'text',
                                              label: 'Input game Id'
                                          },
                                          props: { value: t.gameId },
                                          key: 21,
                                          on: {
                                              keyup:
                                                  f ||
                                                  (a._m10 = o(t.handleKeyUp))
                                          }
                                      },
                                      []
                                  ),
                                  i(
                                      'input',
                                      {
                                          classMap: {
                                              'slds-input': !0,
                                              'slds-var-m-bottom_medium': !0
                                          },
                                          attrs: {
                                              type: 'text',
                                              label: 'Your name'
                                          },
                                          props: { value: t.playerName },
                                          key: 22,
                                          on: {
                                              keyup:
                                                  k ||
                                                  (a._m11 = o(
                                                      t.handlePlayerName
                                                  )),
                                              change:
                                                  _ ||
                                                  (a._m12 = o(
                                                      t.handlePlayerName
                                                  ))
                                          }
                                      },
                                      []
                                  ),
                                  i(
                                      'button',
                                      {
                                          classMap: {
                                              'slds-button': !0,
                                              'slds-button_brand': !0,
                                              'slds-var-m-top_medium': !0
                                          },
                                          key: 23,
                                          on: {
                                              click:
                                                  w || (a._m13 = o(t.joinGame))
                                          }
                                      },
                                      [n('Join')]
                                  )
                              ])
                            : null,
                        t.isWaitingForJoining
                            ? i('div', { key: 31 }, [
                                  i(
                                      'div',
                                      {
                                          classMap: {
                                              'slds-spinner_container': !0
                                          },
                                          key: 30
                                      },
                                      [
                                          i(
                                              'div',
                                              {
                                                  classMap: {
                                                      'slds-spinner': !0,
                                                      'slds-spinner_medium': !0,
                                                      'slds-spinner_brand': !0
                                                  },
                                                  attrs: { role: 'status' },
                                                  key: 29
                                              },
                                              [
                                                  i(
                                                      'span',
                                                      {
                                                          classMap: {
                                                              'slds-assistive-text': !0
                                                          },
                                                          key: 25
                                                      },
                                                      [n('Loading')]
                                                  ),
                                                  i(
                                                      'div',
                                                      {
                                                          classMap: {
                                                              'slds-spinner__dot-a': !0
                                                          },
                                                          key: 26
                                                      },
                                                      []
                                                  ),
                                                  i(
                                                      'div',
                                                      {
                                                          classMap: {
                                                              'slds-spinner__dot-b': !0
                                                          },
                                                          key: 27
                                                      },
                                                      []
                                                  ),
                                                  i(
                                                      'div',
                                                      {
                                                          classMap: {
                                                              'custom-loading-text': !0
                                                          },
                                                          key: 28
                                                      },
                                                      [l(t.waitingMsg)]
                                                  )
                                              ]
                                          )
                                      ]
                                  )
                              ])
                            : null
                    ]
                )
            ];
        }
        var l = Object(a.registerTemplate)(r);
        (r.stylesheets = []),
            i && r.stylesheets.push.apply(r.stylesheets, i),
            (r.stylesheetTokens = {
                hostAttribute: 'my-tictactoepanel-_tictactoepanel-host',
                shadowAttribute: 'my-tictactoepanel-_tictactoepanel'
            });
        class c extends a.LightningElement {
            constructor(...e) {
                super(...e),
                    (this.selectedChannel = void 0),
                    (this.isNoActiveGame = !0),
                    (this.isCreateGame = !1),
                    (this.isJoinAGame = !1),
                    (this.isWaitingForJoining = !1),
                    (this.playerName = ''),
                    (this.waitingMsg = ''),
                    (this.gameId = ''),
                    (this.offLine = !1),
                    (this.opponentName = '');
            }
            createGame() {
                console.log('Create game called'),
                    (this.isNoActiveGame = !1),
                    (this.isCreateGame = !0),
                    (this.waitingMsg =
                        'Your Game Id Please wait you will join soon!');
            }
            joinAGame() {
                (this.isNoActiveGame = !1),
                    (this.isJoinAGame = !0),
                    (this.waitingMsg = 'Please wait you will join soon!');
            }
            get channelOptions() {
                return [
                    { label: 'Play Online', value: 'online' },
                    { label: 'Play n Pass', value: 'offline' }
                ];
            }
            handleChannelOnchange(e) {
                (this.selectedChannel = e.target.value),
                    'online' === this.selectedChannel
                        ? (this.offLine = !1)
                        : (this.offLine = !0);
            }
            handleKeyUp(e) {
                this.receiverGameId = e.target.value;
            }
            handlePlayerName(e) {
                this.playerName = e.target.value;
            }
            handleOpponentName(e) {
                this.opponentName = e.target.value;
            }
            startGame() {
                if (
                    void 0 === this.selectedChannel ||
                    '' === this.selectedChannel
                )
                    return (
                        this.showToastNotification(
                            'Please select game option.'
                        ),
                        !1
                    );
                if (void 0 === this.playerName || '' === this.playerName)
                    return (
                        this.showToastNotification('Please enter player name.'),
                        !1
                    );
                const e = new CustomEvent('startgame', {
                    detail: {
                        selectedChannel: this.selectedChannel,
                        playerName: this.playerName,
                        opponentName: this.opponentName
                    }
                });
                this.dispatchEvent(e);
            }
            waitForPlayer(e) {
                (this.waitingMsg =
                    'Your game id: ' + e + '\n Please wait for your teammate!'),
                    (this.isWaitingForJoining = !0),
                    (this.isCreateGame = !1),
                    (this.isJoinAGame = !1);
            }
            joinGame() {
                (this.isWaitingForJoining = !0), (this.isJoinAGame = !1);
                const e = new CustomEvent('joingame', {
                    detail: {
                        receiverGameId: this.receiverGameId,
                        senderPlayerName: this.playerName
                    }
                });
                this.dispatchEvent(e);
            }
            showToastNotification(e) {}
        }
        Object(a.registerDecorators)(c, {
            publicProps: { selectedChannel: { config: 0 } },
            publicMethods: ['waitForPlayer'],
            fields: [
                'isNoActiveGame',
                'isCreateGame',
                'isJoinAGame',
                'isWaitingForJoining',
                'playerName',
                'waitingMsg',
                'gameId',
                'offLine',
                'opponentName'
            ]
        });
        var d = Object(a.registerComponent)(c, { tmpl: l });
        function m(e, t, s, a) {
            const { t: n, d: o, h: i, k: r, b: l, i: c, c: m } = e,
                { _m0: h, _m1: p, _m2: g } = a;
            return [
                i(
                    'div',
                    {
                        classMap: {
                            header: !0,
                            'slds-var-p-around_medium': !0
                        },
                        key: 9
                    },
                    [
                        i('div', { classMap: { 'slds-grid': !0 }, key: 8 }, [
                            i(
                                'div',
                                {
                                    classMap: {
                                        'slds-col': !0,
                                        'slds-size_1-of-3': !0
                                    },
                                    key: 1
                                },
                                [
                                    i('span', { key: 0 }, [
                                        n('You : '),
                                        o(t.senderPlayerName)
                                    ])
                                ]
                            ),
                            i(
                                'div',
                                {
                                    classMap: {
                                        'slds-col': !0,
                                        'slds-size_1-of-3': !0,
                                        'slds-text-align_center': !0
                                    },
                                    key: 5
                                },
                                [
                                    i(
                                        'div',
                                        {
                                            classMap: {
                                                'slds-progress-bar': !0
                                            },
                                            attrs: {
                                                'aria-valuemin': '0',
                                                'aria-valuemax': '100',
                                                'aria-valuenow': t.progress,
                                                role: 'progressbar'
                                            },
                                            key: 4
                                        },
                                        [
                                            i(
                                                'span',
                                                {
                                                    classMap: {
                                                        'slds-progress-bar__value': !0
                                                    },
                                                    styleMap: { width: '0%' },
                                                    key: 3
                                                },
                                                [
                                                    i(
                                                        'span',
                                                        {
                                                            classMap: {
                                                                'slds-assistive-text': !0
                                                            },
                                                            key: 2
                                                        },
                                                        [n('Progress: 25%')]
                                                    )
                                                ]
                                            )
                                        ]
                                    )
                                ]
                            ),
                            i(
                                'div',
                                {
                                    classMap: {
                                        'slds-col': !0,
                                        'slds-size_1-of-3': !0,
                                        'slds-text-align_right': !0
                                    },
                                    key: 7
                                },
                                [
                                    i('span', { key: 6 }, [
                                        n('Opponent : '),
                                        o(t.receiverPlayerName)
                                    ])
                                ]
                            )
                        ])
                    ]
                ),
                i('div', { classMap: { 'game-container': !0 }, key: 30 }, [
                    i('div', { classMap: { gameBlock: !0 }, key: 14 }, [
                        i(
                            'div',
                            {
                                classMap: { 'slds-grid': !0, 'slds-wrap': !0 },
                                key: 13
                            },
                            c(t.gameBlock, function (e) {
                                return i(
                                    'div',
                                    {
                                        classMap: {
                                            'slds-col': !0,
                                            'slds-size_1-of-3': !0
                                        },
                                        key: r(12, e.cordinate)
                                    },
                                    [
                                        i(
                                            'div',
                                            {
                                                className: e.class,
                                                attrs: {
                                                    'data-target-id':
                                                        e.cordinate
                                                },
                                                key: r(11, e.cordinate),
                                                on: {
                                                    click:
                                                        h ||
                                                        (a._m0 = l(
                                                            t.handleBlock
                                                        ))
                                                }
                                            },
                                            [
                                                i(
                                                    'p',
                                                    {
                                                        classMap: {
                                                            symbol: !0,
                                                            'slds-text-align_center': !0
                                                        },
                                                        attrs: {
                                                            'data-target-id':
                                                                e.cordinate
                                                        },
                                                        key: 10
                                                    },
                                                    [o(e.label)]
                                                )
                                            ]
                                        )
                                    ]
                                );
                            })
                        )
                    ]),
                    t.showOverLay
                        ? i(
                              'div',
                              { classMap: { overlayToStop: !0 }, key: 22 },
                              [
                                  i(
                                      'div',
                                      {
                                          classMap: { 'overlay-content': !0 },
                                          key: 21
                                      },
                                      [
                                          i(
                                              'div',
                                              {
                                                  classMap: {
                                                      'slds-spinner_container': !0
                                                  },
                                                  key: 20
                                              },
                                              [
                                                  i(
                                                      'div',
                                                      {
                                                          classMap: {
                                                              'slds-spinner': !0,
                                                              'slds-spinner_medium': !0,
                                                              'slds-spinner_brand': !0
                                                          },
                                                          attrs: {
                                                              role: 'status'
                                                          },
                                                          key: 19
                                                      },
                                                      [
                                                          i(
                                                              'span',
                                                              {
                                                                  classMap: {
                                                                      'slds-assistive-text': !0
                                                                  },
                                                                  key: 15
                                                              },
                                                              [n('Loading')]
                                                          ),
                                                          i(
                                                              'div',
                                                              {
                                                                  classMap: {
                                                                      'slds-spinner__dot-a': !0
                                                                  },
                                                                  key: 16
                                                              },
                                                              []
                                                          ),
                                                          i(
                                                              'div',
                                                              {
                                                                  classMap: {
                                                                      'slds-spinner__dot-b': !0
                                                                  },
                                                                  key: 17
                                                              },
                                                              []
                                                          ),
                                                          i(
                                                              'div',
                                                              {
                                                                  classMap: {
                                                                      'custom-loading-text': !0
                                                                  },
                                                                  key: 18
                                                              },
                                                              [
                                                                  n(
                                                                      'Waiting for opponent'
                                                                  )
                                                              ]
                                                          )
                                                      ]
                                                  )
                                              ]
                                          )
                                      ]
                                  )
                              ]
                          )
                        : null,
                    t.winningOrLose
                        ? i(
                              'div',
                              { classMap: { overlayToStop: !0 }, key: 26 },
                              [
                                  i(
                                      'div',
                                      {
                                          classMap: { 'overlay-content': !0 },
                                          key: 25
                                      },
                                      [
                                          i(
                                              'div',
                                              {
                                                  classMap: {
                                                      'custom-loading-text-1': !0
                                                  },
                                                  key: 24
                                              },
                                              [
                                                  i('p', { key: 23 }, [
                                                      o(t.winningOrLoseMsg)
                                                  ])
                                              ]
                                          )
                                      ]
                                  )
                              ]
                          )
                        : null,
                    t.activeGame
                        ? null
                        : i('div', { classMap: { overlay: !0 }, key: 29 }, [
                              i(
                                  'div',
                                  {
                                      classMap: { 'overlay-content': !0 },
                                      key: 28
                                  },
                                  [
                                      m(
                                          'my-tictactoepanel',
                                          d,
                                          {
                                              key: 27,
                                              on: {
                                                  joingame:
                                                      p ||
                                                      (a._m1 = l(
                                                          t.setReceiverId
                                                      )),
                                                  startgame:
                                                      g ||
                                                      (a._m2 = l(t.startGame))
                                              }
                                          },
                                          []
                                      )
                                  ]
                              )
                          ])
                ])
            ];
        }
        var h = Object(a.registerTemplate)(m);
        (m.stylesheets = []),
            o && m.stylesheets.push.apply(m.stylesheets, o),
            (m.stylesheetTokens = {
                hostAttribute: 'my-tictactoe-_tictactoe-host',
                shadowAttribute: 'my-tictactoe-_tictactoe'
            });
        var p = s(6);
        class g extends a.LightningElement {
            constructor(...e) {
                super(...e),
                    (this.gameBlock = []),
                    (this.renderComplete = !1),
                    (this.activeGame = !1),
                    (this.currentColor = 'white'),
                    (this.currentSymbol = 'X'),
                    (this.channelName = '/event/TicTocEvent__e'),
                    (this.subscription = void 0),
                    (this.selectedChannel = void 0),
                    (this.receiverPlayerName = void 0),
                    (this.senderPlayerName = void 0),
                    (this.senderGameId = void 0),
                    (this.receiverGameId = void 0),
                    (this.showOverLay = !1),
                    (this.winningOrLoseMsg = void 0),
                    (this.winningOrLose = !1),
                    (this.progress = 1),
                    (this.showProgress = !1),
                    (this.socket = p.connect('http://localhost:3001/'));
            }
            renderedCallback() {
                this.renderComplete ||
                    ((this.renderComplete = !0), this.setGameBlock());
            }
            connectedCallback() {
                this.socket.on('joinned', (e) => {
                    console.log(this.receiverGameId),
                        console.log('under if'),
                        this.socket.emit('room id confirmation', {
                            joinned: !0,
                            playerName: this.senderPlayerName,
                            roomId: e.roomId
                        }),
                        (this.receiverPlayerName = e.playerName),
                        (this.senderGameId = e.roomId),
                        this.activateGame(),
                        (this.showProgress = !0),
                        (this.progress = 1),
                        (this.template.querySelector(
                            '.slds-progress-bar__value'
                        ).style = `width : ${this.progress}%`),
                        this.setIntervalFunction(),
                        console.log(e),
                        console.log('Under Joinned');
                }),
                    this.socket.on('room full', (e) => {
                        console.log(e);
                    }),
                    this.socket.on('successfully connected', (e) => {
                        (this.receiverPlayerName = e.playerName),
                            console.log(this.receiverPlayerName),
                            console.log('startgame'),
                            this.activateGame(),
                            (this.showOverLay = !0),
                            console.log('Room connected successfully');
                    }),
                    this.socket.on('get roomId', (e) => {
                        this.template
                            .querySelector('my-ticTacToePanel')
                            .waitForPlayer(e),
                            (this.senderGameId = e);
                    }),
                    this.socket.on('move played', (e) => {
                        (this.showOverLay = !1),
                            this.playMove(e.cordinate),
                            this.checkForWinning(
                                this.currentSymbol,
                                e.cordinate
                            )
                                ? ((this.winningOrLoseMsg = 'You lose'),
                                  (this.winningOrLose = !0))
                                : ((this.showProgress = !0),
                                  (this.progress = 1),
                                  (this.template.querySelector(
                                      '.slds-progress-bar__value'
                                  ).style = `width : ${this.progress}%`),
                                  this.setIntervalFunction());
                    });
            }
            disconnectedCallback() {}
            subscribeGameEvents() {
                console.log(this.channelName);
            }
            joinGame(e) {
                (this.receiverPlayerName = e.PlayerName__c),
                    console.log(this.receiverPlayerName);
            }
            joinGameRoom(e, t) {
                console.log(e),
                    this.socket.emit('confirm room id', {
                        roomId: e,
                        playerName: t
                    });
            }
            gameEvent() {}
            setReceiverId(e) {
                this.joinGameRoom(
                    e.detail.receiverGameId,
                    e.detail.senderPlayerName
                ),
                    (this.senderGameId = e.detail.receiverGameId),
                    (this.senderPlayerName = e.detail.senderPlayerName),
                    (this.selectedChannel = 'online');
            }
            triggerActions(e) {
                switch (e.action__c) {
                    case 'join confirmation':
                        (this.senderGameId = e.SenderGameId__c),
                            (this.receiverPlayerName = e.PlayerName__c),
                            console.log(this.receiverPlayerName),
                            console.log('startgame'),
                            this.activateGame(),
                            (this.showOverLay = !0);
                        break;
                    case 'receiver move':
                        (this.showOverLay = !1),
                            this.playMove(e.corditnate__c),
                            this.checkForWinning(
                                this.currentSymbol,
                                e.corditnate__c
                            )
                                ? ((this.winningOrLoseMsg = 'You lose'),
                                  (this.winningOrLose = !0))
                                : ((this.showProgress = !0),
                                  (this.progress = 1),
                                  (this.template.querySelector(
                                      '.slds-progress-bar__value'
                                  ).style = `width : ${this.progress}%`),
                                  this.setIntervalFunction());
                }
            }
            activateGame() {
                this.activeGame = !0;
            }
            setIntervalFunction() {
                this.timeOutVar = setInterval(() => {
                    console.log('under interval function ' + this.progress),
                        100 === this.progress
                            ? (console.log('under clear interval'),
                              this.clearIntervalFun())
                            : ((this.progress += 1),
                              (this.template.querySelector(
                                  '.slds-progress-bar__value'
                              ).style = `width : ${this.progress}%`));
                }, 300);
            }
            clearIntervalFun() {
                100 === this.progress &&
                    ((this.winningOrLose = !0),
                    'offline' === this.selectedChannel &&
                        ('O' === this.currentSymbol
                            ? (this.winningOrLoseMsg =
                                  'Time over \n' +
                                  this.receiverPlayerName +
                                  ' lose!')
                            : (this.winningOrLoseMsg =
                                  'Time over \n' +
                                  this.senderPlayerName +
                                  ' lose!')));
            }
            setGameBlock() {
                this.gameBlock = [];
                for (let e = 0; e < 3; e++)
                    for (let t = 0; t < 3; t++) {
                        let s;
                        (s = {
                            class: 'blank',
                            cordinate: `${e} : ${t}`,
                            label: 'T'
                        }),
                            this.gameBlock.push(s);
                    }
                console.log(this.gameBlock);
            }
            handleBlock(e) {
                clearInterval(this.timeOutVar), (this.showProgress = !1);
                let t = e.target.dataset.targetId;
                if (
                    'blank' !==
                    this.gameBlock[this.getIndexByCordinate(t)].class
                )
                    return !1;
                const s = this.playMove(t);
                console.log(this.selectedChannel),
                    console.log(this.senderGameId),
                    'online' === this.selectedChannel &&
                        this.socket.emit('play move', {
                            cordinate: t,
                            roomId: this.senderGameId
                        }),
                    s
                        ? ('offline' === this.selectedChannel
                              ? 'O' === this.currentSymbol
                                  ? (this.winningOrLoseMsg =
                                        this.senderPlayerName + ' win!')
                                  : (this.winningOrLoseMsg =
                                        this.receiverPlayerName + ' win!')
                              : (this.winningOrLoseMsg = 'You win!'),
                          (this.winningOrLose = !0))
                        : 'online' === this.selectedChannel
                        ? (this.showOverLay = !0)
                        : ((this.progress = 1),
                          (this.template.querySelector(
                              '.slds-progress-bar__value'
                          ).style = `width : ${this.progress}%`),
                          this.setIntervalFunction());
            }
            playMove(e) {
                const t = this.getIndexByCordinate(e);
                return (
                    (this.gameBlock[t].class =
                        'black' === this.currentColor ? 'white' : 'black'),
                    (this.currentColor =
                        'black' === this.currentColor ? 'white' : 'black'),
                    (this.gameBlock[t].label =
                        'X' === this.currentSymbol ? 'O' : 'X'),
                    (this.currentSymbol =
                        'X' === this.currentSymbol ? 'O' : 'X'),
                    this.checkForWinning(this.currentSymbol, e)
                );
            }
            checkForWinning(e, t) {
                console.log(e);
                let s = t.split(' : '),
                    a =
                        8 - Number(s[0]) == 8
                            ? 0
                            : 8 - Number(s[0]) == 7
                            ? 3
                            : 6,
                    n =
                        8 - Number(s[1]) == 8
                            ? 0
                            : 8 - Number(s[1]) == 7
                            ? 1
                            : 2;
                console.log(a), console.log(n);
                for (let t = a; t < a + 3 && this.gameBlock[t].label === e; t++)
                    if (t === a + 3 - 1) return !0;
                for (
                    let t = n;
                    t <= n + 6 && this.gameBlock[t].label === e;
                    t += 3
                )
                    if (t === n + 6) return !0;
                if (s[0] === s[1])
                    for (
                        let t = 0;
                        t <= 8 && this.gameBlock[t].label === e;
                        t += 4
                    )
                        if (8 === t) return !0;
                if (Number(s[0]) + Number(s[1]) === 2)
                    for (
                        let t = 2;
                        t <= 6 && this.gameBlock[t].label === e;
                        t += 2
                    )
                        if (6 === t) return !0;
                return !1;
            }
            getIndexByCordinate(e) {
                return this.gameBlock.findIndex((t) => t.cordinate === e);
            }
            createRoom() {
                this.socket.emit('create room');
            }
            startGame(e) {
                (this.selectedChannel = e.detail.selectedChannel),
                    'online' === this.selectedChannel
                        ? this.createRoom(this.senderGameId)
                        : (console.log(this.selectedChannel),
                          (this.receiverPlayerName = e.detail.opponentName),
                          this.setIntervalFunction(),
                          this.activateGame()),
                    (this.senderPlayerName = e.detail.playerName);
            }
        }
        Object(a.registerDecorators)(g, {
            track: { gameBlock: 1 },
            fields: [
                'renderComplete',
                'activeGame',
                'currentColor',
                'currentSymbol',
                'channelName',
                'subscription',
                'selectedChannel',
                'receiverPlayerName',
                'senderPlayerName',
                'senderGameId',
                'receiverGameId',
                'showOverLay',
                'winningOrLoseMsg',
                'winningOrLose',
                'progress',
                'showProgress',
                'socket'
            ]
        });
        var u = Object(a.registerComponent)(g, { tmpl: h });
        function y(e, t, s, a) {
            const { c: n } = e;
            return [n('my-tictactoe', u, { key: 0 }, [])];
        }
        var v = Object(a.registerTemplate)(y);
        (y.stylesheets = []),
            n && y.stylesheets.push.apply(y.stylesheets, n),
            (y.stylesheetTokens = {
                hostAttribute: 'my-app-_app-host',
                shadowAttribute: 'my-app-_app'
            });
        class b extends a.LightningElement {
            connectedCallback() {
                const e = p.connect('http://localhost:3001/');
                e.on('connect', () => {
                    console.log('app connected'),
                        e.emit('message', { message: 'Hello server1' });
                }),
                    e.on('message1', (e) => {
                        console.log(e);
                    });
            }
        }
        var f = Object(a.registerComponent)(b, { tmpl: v });
        const k = Object(a.createElement)('my-app', { is: f });
        document.querySelector('#main').appendChild(k);
    }
});
