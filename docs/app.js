!(function (e) {
    function t(t) {
        for (
            var a, l, o = t[0], r = t[1], c = t[2], m = 0, h = [];
            m < o.length;
            m++
        )
            (l = o[m]),
                Object.prototype.hasOwnProperty.call(n, l) &&
                    n[l] &&
                    h.push(n[l][0]),
                (n[l] = 0);
        for (a in r)
            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
        for (d && d(t); h.length; ) h.shift()();
        return i.push.apply(i, c || []), s();
    }
    function s() {
        for (var e, t = 0; t < i.length; t++) {
            for (var s = i[t], a = !0, o = 1; o < s.length; o++) {
                var r = s[o];
                0 !== n[r] && (a = !1);
            }
            a && (i.splice(t--, 1), (e = l((l.s = s[0]))));
        }
        return e;
    }
    var a = {},
        n = { 1: 0 },
        i = [];
    function l(t) {
        if (a[t]) return a[t].exports;
        var s = (a[t] = { i: t, l: !1, exports: {} });
        return e[t].call(s.exports, s, s.exports, l), (s.l = !0), s.exports;
    }
    (l.m = e),
        (l.c = a),
        (l.d = function (e, t, s) {
            l.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: s });
        }),
        (l.r = function (e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module'
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (l.t = function (e, t) {
            if ((1 & t && (e = l(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var s = Object.create(null);
            if (
                (l.r(s),
                Object.defineProperty(s, 'default', {
                    enumerable: !0,
                    value: e
                }),
                2 & t && 'string' != typeof e)
            )
                for (var a in e)
                    l.d(
                        s,
                        a,
                        function (t) {
                            return e[t];
                        }.bind(null, a)
                    );
            return s;
        }),
        (l.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return l.d(t, 'a', t), t;
        }),
        (l.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (l.p = './');
    var o = (window.webpackJsonp = window.webpackJsonp || []),
        r = o.push.bind(o);
    (o.push = t), (o = o.slice());
    for (var c = 0; c < o.length; c++) t(o[c]);
    var d = r;
    i.push([28, 0, 2]), s();
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
        var i = [
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
                    '{margin-left:15%;margin-right:15%}.slds-wrap',
                    t,
                    ' div',
                    t,
                    '{border:1px solid #000}.symbol',
                    t,
                    '{font-size:6em}.overlay',
                    t,
                    '{position:fixed;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(158,142,121,.9);z-index:2}.overlay-content',
                    t,
                    '{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.overlayToStop',
                    t,
                    '{position:fixed;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(158,142,121,.4);z-index:2}.custom-loading-text',
                    t,
                    '{color:#a8eca8;transform:rotate(-90deg);font-size:large;position:absolute;top:-.5rem;left:-1rem;white-space:pre;text-align:center}.custom-loading-text-1',
                    t,
                    '{color:#d23a48;font-size:xx-large;padding:0 135px;white-space:pre;background:#60ea8b;border:1px solid #2b8c45;text-align:center}'
                ].join('');
            }
        ];
        var l = [
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
        function o(e, t, s, a) {
            const { t: n, b: i, h: l, gid: o, d: r } = e,
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
                    _m10: k,
                    _m11: f,
                    _m12: _,
                    _m13: M,
                    _m14: w
                } = a;
            return [
                l(
                    'div',
                    {
                        classMap: {
                            'slds-m-top_small': !0,
                            'slds-m-bottom_medium': !0
                        },
                        key: 45
                    },
                    [
                        t.isNoActiveGame
                            ? l('div', { key: 2 }, [
                                  l(
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
                                                  c || (a._m0 = i(t.createGame))
                                          }
                                      },
                                      [n('Create game')]
                                  ),
                                  l(
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
                                                  d || (a._m1 = i(t.joinAGame))
                                          }
                                      },
                                      [n('Join game')]
                                  )
                              ])
                            : null,
                        t.isCreateGame
                            ? l('div', { key: 27 }, [
                                  l(
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
                                                  (a._m2 = i(
                                                      t.handleChannelOnchange
                                                  ))
                                          }
                                      },
                                      []
                                  ),
                                  l(
                                      'fieldset',
                                      {
                                          classMap: {
                                              'slds-form-element': !0,
                                              'slds-var-m-bottom_medium': !0
                                          },
                                          key: 16
                                      },
                                      [
                                          l(
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
                                          l(
                                              'div',
                                              {
                                                  classMap: {
                                                      'slds-form-element__control': !0
                                                  },
                                                  key: 15
                                              },
                                              [
                                                  l(
                                                      'span',
                                                      {
                                                          classMap: {
                                                              'slds-radio': !0
                                                          },
                                                          key: 9
                                                      },
                                                      [
                                                          l(
                                                              'input',
                                                              {
                                                                  attrs: {
                                                                      type:
                                                                          'radio',
                                                                      id: o(
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
                                                                          (a._m3 = i(
                                                                              t.handleChannelOnchange
                                                                          ))
                                                                  }
                                                              },
                                                              []
                                                          ),
                                                          l(
                                                              'label',
                                                              {
                                                                  classMap: {
                                                                      'slds-radio__label': !0
                                                                  },
                                                                  attrs: {
                                                                      for:
                                                                          '' +
                                                                          o(
                                                                              'radio-43'
                                                                          )
                                                                  },
                                                                  key: 8
                                                              },
                                                              [
                                                                  l(
                                                                      'span',
                                                                      {
                                                                          classMap: {
                                                                              'slds-radio_faux': !0
                                                                          },
                                                                          key: 6
                                                                      },
                                                                      []
                                                                  ),
                                                                  l(
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
                                                  l(
                                                      'span',
                                                      {
                                                          classMap: {
                                                              'slds-radio': !0
                                                          },
                                                          key: 14
                                                      },
                                                      [
                                                          l(
                                                              'input',
                                                              {
                                                                  attrs: {
                                                                      type:
                                                                          'radio',
                                                                      id: o(
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
                                                                          (a._m4 = i(
                                                                              t.handleChannelOnchange
                                                                          ))
                                                                  }
                                                              },
                                                              []
                                                          ),
                                                          l(
                                                              'label',
                                                              {
                                                                  classMap: {
                                                                      'slds-radio__label': !0
                                                                  },
                                                                  attrs: {
                                                                      for:
                                                                          '' +
                                                                          o(
                                                                              'radio-44'
                                                                          )
                                                                  },
                                                                  key: 13
                                                              },
                                                              [
                                                                  l(
                                                                      'span',
                                                                      {
                                                                          classMap: {
                                                                              'slds-radio_faux': !0
                                                                          },
                                                                          key: 11
                                                                      },
                                                                      []
                                                                  ),
                                                                  l(
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
                                  l(
                                      'div',
                                      {
                                          classMap: { 'slds-form-element': !0 },
                                          key: 20
                                      },
                                      [
                                          l(
                                              'label',
                                              {
                                                  classMap: {
                                                      'slds-form-element__label': !0
                                                  },
                                                  attrs: {
                                                      for:
                                                          '' +
                                                          o('text-input-id-1')
                                                  },
                                                  key: 17
                                              },
                                              [n('Your name')]
                                          ),
                                          l(
                                              'div',
                                              {
                                                  classMap: {
                                                      'slds-form-element__control': !0
                                                  },
                                                  key: 19
                                              },
                                              [
                                                  l(
                                                      'input',
                                                      {
                                                          classMap: {
                                                              'slds-input': !0,
                                                              'slds-var-m-bottom_medium': !0
                                                          },
                                                          attrs: {
                                                              type: 'text',
                                                              id: o(
                                                                  'text-input-id-1'
                                                              )
                                                          },
                                                          key: 18,
                                                          on: {
                                                              keyup:
                                                                  g ||
                                                                  (a._m5 = i(
                                                                      t.handlePlayerName
                                                                  )),
                                                              change:
                                                                  u ||
                                                                  (a._m6 = i(
                                                                      t.handlePlayerName
                                                                  ))
                                                          }
                                                      },
                                                      []
                                                  )
                                              ]
                                          )
                                      ]
                                  ),
                                  t.offLine
                                      ? l(
                                            'div',
                                            {
                                                classMap: {
                                                    'slds-form-element': !0
                                                },
                                                key: 25
                                            },
                                            [
                                                l(
                                                    'label',
                                                    {
                                                        classMap: {
                                                            'slds-form-element__label': !0
                                                        },
                                                        attrs: {
                                                            for:
                                                                '' +
                                                                o(
                                                                    'text-input-id-2'
                                                                )
                                                        },
                                                        key: 22
                                                    },
                                                    [
                                                        l(
                                                            'abbr',
                                                            {
                                                                classMap: {
                                                                    'slds-required': !0
                                                                },
                                                                attrs: {
                                                                    title:
                                                                        'required'
                                                                },
                                                                key: 21
                                                            },
                                                            [n('* ')]
                                                        ),
                                                        n('Opponent name')
                                                    ]
                                                ),
                                                l(
                                                    'div',
                                                    {
                                                        classMap: {
                                                            'slds-form-element__control': !0
                                                        },
                                                        key: 24
                                                    },
                                                    [
                                                        l(
                                                            'input',
                                                            {
                                                                classMap: {
                                                                    'slds-input': !0,
                                                                    'slds-var-m-bottom_medium': !0
                                                                },
                                                                attrs: {
                                                                    type:
                                                                        'text',
                                                                    id: o(
                                                                        'text-input-id-2'
                                                                    )
                                                                },
                                                                key: 23,
                                                                on: {
                                                                    keyup:
                                                                        y ||
                                                                        (a._m7 = i(
                                                                            t.handleOpponentName
                                                                        )),
                                                                    change:
                                                                        v ||
                                                                        (a._m8 = i(
                                                                            t.handleOpponentName
                                                                        ))
                                                                }
                                                            },
                                                            []
                                                        )
                                                    ]
                                                )
                                            ]
                                        )
                                      : null,
                                  l(
                                      'button',
                                      {
                                          classMap: {
                                              'slds-button': !0,
                                              'slds-button_brand': !0,
                                              'slds-var-m-top_medium': !0
                                          },
                                          key: 26,
                                          on: {
                                              click:
                                                  b || (a._m9 = i(t.startGame))
                                          }
                                      },
                                      [n('Start Game')]
                                  )
                              ])
                            : null,
                        t.isJoinAGame
                            ? l('div', { key: 37 }, [
                                  l(
                                      'div',
                                      {
                                          classMap: { 'slds-form-element': !0 },
                                          key: 31
                                      },
                                      [
                                          l(
                                              'label',
                                              {
                                                  classMap: {
                                                      'slds-form-element__label': !0
                                                  },
                                                  attrs: {
                                                      for:
                                                          '' +
                                                          o('text-input-id-1')
                                                  },
                                                  key: 28
                                              },
                                              [n('Input game Id')]
                                          ),
                                          l(
                                              'div',
                                              {
                                                  classMap: {
                                                      'slds-form-element__control': !0
                                                  },
                                                  key: 30
                                              },
                                              [
                                                  l(
                                                      'input',
                                                      {
                                                          classMap: {
                                                              'slds-input': !0,
                                                              'slds-var-m-bottom_medium': !0
                                                          },
                                                          attrs: {
                                                              type: 'text',
                                                              id: o(
                                                                  'text-input-id-3'
                                                              )
                                                          },
                                                          key: 29,
                                                          on: {
                                                              keyup:
                                                                  k ||
                                                                  (a._m10 = i(
                                                                      t.handleKeyUp
                                                                  )),
                                                              change:
                                                                  f ||
                                                                  (a._m11 = i(
                                                                      t.handleKeyUp
                                                                  ))
                                                          }
                                                      },
                                                      []
                                                  )
                                              ]
                                          )
                                      ]
                                  ),
                                  l(
                                      'div',
                                      {
                                          classMap: { 'slds-form-element': !0 },
                                          key: 35
                                      },
                                      [
                                          l(
                                              'label',
                                              {
                                                  classMap: {
                                                      'slds-form-element__label': !0
                                                  },
                                                  attrs: {
                                                      for:
                                                          '' +
                                                          o('text-input-id-1')
                                                  },
                                                  key: 32
                                              },
                                              [n('Your name')]
                                          ),
                                          l(
                                              'div',
                                              {
                                                  classMap: {
                                                      'slds-form-element__control': !0
                                                  },
                                                  key: 34
                                              },
                                              [
                                                  l(
                                                      'input',
                                                      {
                                                          classMap: {
                                                              'slds-input': !0,
                                                              'slds-var-m-bottom_medium': !0
                                                          },
                                                          attrs: {
                                                              type: 'text',
                                                              id: o(
                                                                  'text-input-id-4'
                                                              )
                                                          },
                                                          key: 33,
                                                          on: {
                                                              keyup:
                                                                  _ ||
                                                                  (a._m12 = i(
                                                                      t.handlePlayerName
                                                                  )),
                                                              change:
                                                                  M ||
                                                                  (a._m13 = i(
                                                                      t.handlePlayerName
                                                                  ))
                                                          }
                                                      },
                                                      []
                                                  )
                                              ]
                                          )
                                      ]
                                  ),
                                  l(
                                      'button',
                                      {
                                          classMap: {
                                              'slds-button': !0,
                                              'slds-button_brand': !0,
                                              'slds-var-m-top_medium': !0
                                          },
                                          key: 36,
                                          on: {
                                              click:
                                                  w || (a._m14 = i(t.joinGame))
                                          }
                                      },
                                      [n('Join')]
                                  )
                              ])
                            : null,
                        t.isWaitingForJoining
                            ? l('div', { key: 44 }, [
                                  l(
                                      'div',
                                      {
                                          classMap: {
                                              'slds-spinner_container': !0
                                          },
                                          key: 43
                                      },
                                      [
                                          l(
                                              'div',
                                              {
                                                  classMap: {
                                                      'slds-spinner': !0,
                                                      'slds-spinner_medium': !0,
                                                      'slds-spinner_brand': !0
                                                  },
                                                  attrs: { role: 'status' },
                                                  key: 42
                                              },
                                              [
                                                  l(
                                                      'span',
                                                      {
                                                          classMap: {
                                                              'slds-assistive-text': !0
                                                          },
                                                          key: 38
                                                      },
                                                      [n('Loading')]
                                                  ),
                                                  l(
                                                      'div',
                                                      {
                                                          classMap: {
                                                              'slds-spinner__dot-a': !0
                                                          },
                                                          key: 39
                                                      },
                                                      []
                                                  ),
                                                  l(
                                                      'div',
                                                      {
                                                          classMap: {
                                                              'slds-spinner__dot-b': !0
                                                          },
                                                          key: 40
                                                      },
                                                      []
                                                  ),
                                                  l(
                                                      'div',
                                                      {
                                                          classMap: {
                                                              'custom-loading-text': !0
                                                          },
                                                          key: 41
                                                      },
                                                      [r(t.waitingMsg)]
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
        var r = Object(a.registerTemplate)(o);
        (o.stylesheets = []),
            l && o.stylesheets.push.apply(o.stylesheets, l),
            (o.stylesheetTokens = {
                hostAttribute: 'my-gamepanel-_gamepanel-host',
                shadowAttribute: 'my-gamepanel-_gamepanel'
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
        var d = Object(a.registerComponent)(c, { tmpl: r });
        function m(e, t, s, a) {
            const { t: n, d: i, h: l, k: o, b: r, i: c, c: m } = e,
                { _m0: h, _m1: p, _m2: g, _m3: u, _m4: y, _m5: v, _m6: b } = a;
            return [
                l(
                    'div',
                    {
                        classMap: {
                            header: !0,
                            'slds-var-p-around_medium': !0
                        },
                        key: 9
                    },
                    [
                        l('div', { classMap: { 'slds-grid': !0 }, key: 8 }, [
                            l(
                                'div',
                                {
                                    classMap: {
                                        'slds-col': !0,
                                        'slds-size_1-of-3': !0
                                    },
                                    key: 1
                                },
                                [
                                    l('span', { key: 0 }, [
                                        n('You : '),
                                        i(t.senderPlayerName)
                                    ])
                                ]
                            ),
                            l(
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
                                    l(
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
                                            l(
                                                'span',
                                                {
                                                    classMap: {
                                                        'slds-progress-bar__value': !0
                                                    },
                                                    styleMap: { width: '0%' },
                                                    key: 3
                                                },
                                                [
                                                    l(
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
                            l(
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
                                    l('span', { key: 6 }, [
                                        n('Opponent : '),
                                        i(t.receiverPlayerName)
                                    ])
                                ]
                            )
                        ])
                    ]
                ),
                l('div', { classMap: { 'game-container': !0 }, key: 39 }, [
                    l('div', { classMap: { gameBlock: !0 }, key: 14 }, [
                        l(
                            'div',
                            {
                                classMap: { 'slds-grid': !0, 'slds-wrap': !0 },
                                key: 13
                            },
                            c(t.gameBlock, function (e) {
                                return l(
                                    'div',
                                    {
                                        classMap: {
                                            'slds-col': !0,
                                            'slds-size_1-of-3': !0
                                        },
                                        key: o(12, e.cordinate)
                                    },
                                    [
                                        l(
                                            'div',
                                            {
                                                className: e.class,
                                                attrs: {
                                                    'data-target-id':
                                                        e.cordinate
                                                },
                                                key: o(11, e.cordinate),
                                                on: {
                                                    click:
                                                        h ||
                                                        (a._m0 = r(
                                                            t.handleBlock
                                                        ))
                                                }
                                            },
                                            [
                                                l(
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
                                                    [i(e.label)]
                                                )
                                            ]
                                        )
                                    ]
                                );
                            })
                        )
                    ]),
                    t.showOverLay
                        ? l(
                              'div',
                              { classMap: { overlayToStop: !0 }, key: 22 },
                              [
                                  l(
                                      'div',
                                      {
                                          classMap: { 'overlay-content': !0 },
                                          key: 21
                                      },
                                      [
                                          l(
                                              'div',
                                              {
                                                  classMap: {
                                                      'slds-spinner_container': !0
                                                  },
                                                  key: 20
                                              },
                                              [
                                                  l(
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
                                                          l(
                                                              'span',
                                                              {
                                                                  classMap: {
                                                                      'slds-assistive-text': !0
                                                                  },
                                                                  key: 15
                                                              },
                                                              [n('Loading')]
                                                          ),
                                                          l(
                                                              'div',
                                                              {
                                                                  classMap: {
                                                                      'slds-spinner__dot-a': !0
                                                                  },
                                                                  key: 16
                                                              },
                                                              []
                                                          ),
                                                          l(
                                                              'div',
                                                              {
                                                                  classMap: {
                                                                      'slds-spinner__dot-b': !0
                                                                  },
                                                                  key: 17
                                                              },
                                                              []
                                                          ),
                                                          l(
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
                        ? l(
                              'div',
                              { classMap: { overlayToStop: !0 }, key: 30 },
                              [
                                  l(
                                      'div',
                                      {
                                          classMap: { 'overlay-content': !0 },
                                          key: 29
                                      },
                                      [
                                          l('div', { key: 28 }, [
                                              l(
                                                  'p',
                                                  {
                                                      classMap: {
                                                          'custom-loading-text-1': !0
                                                      },
                                                      key: 23
                                                  },
                                                  [i(t.winningOrLoseMsg)]
                                              ),
                                              l(
                                                  'div',
                                                  {
                                                      classMap: {
                                                          'slds-align_absolute-center': !0,
                                                          'slds-m-top_x-small': !0
                                                      },
                                                      key: 27
                                                  },
                                                  [
                                                      t.isRematch
                                                          ? null
                                                          : l(
                                                                'button',
                                                                {
                                                                    classMap: {
                                                                        'slds-button': !0,
                                                                        'slds-button_brand': !0,
                                                                        'slds-m-left_x-small': !0
                                                                    },
                                                                    key: 24,
                                                                    on: {
                                                                        click:
                                                                            p ||
                                                                            (a._m1 = r(
                                                                                t.startAgain
                                                                            ))
                                                                    }
                                                                },
                                                                [
                                                                    n(
                                                                        'Start again'
                                                                    )
                                                                ]
                                                            ),
                                                      t.isRematch
                                                          ? l(
                                                                'button',
                                                                {
                                                                    classMap: {
                                                                        'slds-button': !0,
                                                                        'slds-button_brand': !0,
                                                                        'slds-m-left_x-small': !0
                                                                    },
                                                                    key: 25,
                                                                    on: {
                                                                        click:
                                                                            g ||
                                                                            (a._m2 = r(
                                                                                t.rematch
                                                                            ))
                                                                    }
                                                                },
                                                                [n('Rematch')]
                                                            )
                                                          : null,
                                                      l(
                                                          'button',
                                                          {
                                                              classMap: {
                                                                  'slds-button': !0,
                                                                  'slds-button_brand': !0,
                                                                  'slds-m-left_x-small': !0
                                                              },
                                                              key: 26,
                                                              on: {
                                                                  click:
                                                                      u ||
                                                                      (a._m3 = r(
                                                                          t.exitGame
                                                                      ))
                                                              }
                                                          },
                                                          [n('Exit')]
                                                      )
                                                  ]
                                              )
                                          ])
                                      ]
                                  )
                              ]
                          )
                        : null,
                    t.isNoPlayer
                        ? l(
                              'div',
                              { classMap: { overlayToStop: !0 }, key: 35 },
                              [
                                  l(
                                      'div',
                                      {
                                          classMap: { 'overlay-content': !0 },
                                          key: 34
                                      },
                                      [
                                          l('div', { key: 33 }, [
                                              l(
                                                  'p',
                                                  {
                                                      classMap: {
                                                          'custom-loading-text-1': !0
                                                      },
                                                      key: 31
                                                  },
                                                  [n('Player left the game')]
                                              ),
                                              l(
                                                  'button',
                                                  {
                                                      classMap: {
                                                          'slds-button': !0,
                                                          'slds-button_brand': !0,
                                                          'slds-var-m-top_medium': !0,
                                                          'slds-align_absolute-center': !0
                                                      },
                                                      key: 32,
                                                      on: {
                                                          click:
                                                              y ||
                                                              (a._m4 = r(
                                                                  t.exitGame
                                                              ))
                                                      }
                                                  },
                                                  [n('Exit')]
                                              )
                                          ])
                                      ]
                                  )
                              ]
                          )
                        : null,
                    t.activeGame
                        ? null
                        : l('div', { classMap: { overlay: !0 }, key: 38 }, [
                              l(
                                  'div',
                                  {
                                      classMap: { 'overlay-content': !0 },
                                      key: 37
                                  },
                                  [
                                      m(
                                          'my-gamepanel',
                                          d,
                                          {
                                              key: 36,
                                              on: {
                                                  joingame:
                                                      v ||
                                                      (a._m5 = r(
                                                          t.setReceiverId
                                                      )),
                                                  startgame:
                                                      b ||
                                                      (a._m6 = r(t.startGame))
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
            i && m.stylesheets.push.apply(m.stylesheets, i),
            (m.stylesheetTokens = {
                hostAttribute: 'my-game-_game-host',
                shadowAttribute: 'my-game-_game'
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
                    (this.isRematch = !1),
                    (this.isNoPlayer = !1),
                    (this.socket = p.connect(
                        'https://tic-tac-toe-lwc-oss.herokuapp.com/'
                    ));
            }
            renderedCallback() {
                this.renderComplete ||
                    ((this.renderComplete = !0), this.setGameBlock());
            }
            connectedCallback() {
                this.socket.on('joinned', (e) => {
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
                            .querySelector('my-gamepanel')
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
                                : this.isGridFull()
                                ? ((this.winningOrLoseMsg = 'Game tied'),
                                  (this.winningOrLose = !0))
                                : ((this.showProgress = !0),
                                  (this.progress = 1),
                                  (this.template.querySelector(
                                      '.slds-progress-bar__value'
                                  ).style = `width : ${this.progress}%`),
                                  this.setIntervalFunction());
                    }),
                    this.socket.on('rematch', (e) => {
                        console.log('rematch'),
                            this.winningOrLose
                                ? 'rematch' === e && (this.isRematch = !0)
                                : this.socket.emit('player not available', {
                                      roomId: this.senderGameId
                                  });
                    }),
                    this.socket.on('no player', (e) => {
                        console.log('no player'),
                            'noPlayer' === e && (this.isNoPlayer = !0);
                    });
            }
            startAgain() {
                (this.winningOrLose = !1),
                    (this.renderComplete = !1),
                    this.activateGame(),
                    console.log('Under start game'),
                    console.log(this.senderGameId),
                    (this.showOverLay = !0),
                    this.socket.emit('start again', {
                        roomId: this.senderGameId
                    }),
                    this.renderedCallback();
            }
            rematch() {
                (this.isRematch = !1),
                    (this.renderComplete = !1),
                    (this.winningOrLose = !1),
                    this.activateGame(),
                    this.renderedCallback();
            }
            exitGame() {
                (this.winningOrLose = !1),
                    (this.renderComplete = !1),
                    (this.winningOrLose = !1),
                    (this.showOverLay = !1),
                    (this.isNoPlayer = !1),
                    this.isRematch &&
                        this.socket.emit('player not available', {
                            roomId: this.senderGameId
                        }),
                    this.renderedCallback(),
                    (this.activeGame = !1),
                    (this.isRematch = !1);
            }
            joinGameRoom(e, t) {
                console.log(e),
                    this.socket.emit('confirm room id', {
                        roomId: e,
                        playerName: t
                    });
            }
            setReceiverId(e) {
                this.joinGameRoom(
                    e.detail.receiverGameId,
                    e.detail.senderPlayerName
                ),
                    (this.senderGameId = e.detail.receiverGameId),
                    (this.senderPlayerName = e.detail.senderPlayerName),
                    (this.selectedChannel = 'online');
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
                        : this.isGridFull()
                        ? ((this.winningOrLoseMsg = 'Game tied'),
                          (this.winningOrLose = !0))
                        : s ||
                          ('online' === this.selectedChannel
                              ? (this.showOverLay = !0)
                              : ((this.progress = 1),
                                (this.template.querySelector(
                                    '.slds-progress-bar__value'
                                ).style = `width : ${this.progress}%`),
                                this.setIntervalFunction()));
            }
            isGridFull() {
                let e = !0;
                return (
                    this.gameBlock.forEach((t) => {
                        'blank' === t.class && (e = !1);
                    }),
                    e
                );
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
                'isRematch',
                'isNoPlayer',
                'socket'
            ]
        });
        var u = Object(a.registerComponent)(g, { tmpl: h });
        function y(e, t, s, a) {
            const { c: n } = e;
            return [n('my-game', u, { key: 0 }, [])];
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
        var k = Object(a.registerComponent)(b, { tmpl: v });
        const f = Object(a.createElement)('my-app', { is: k });
        document.querySelector('#main').appendChild(f);
    }
});
