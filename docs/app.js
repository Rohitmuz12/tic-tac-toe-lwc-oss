!(function (e) {
    function t(t) {
        for (
            var a, o, r = t[0], l = t[1], c = t[2], m = 0, p = [];
            m < r.length;
            m++
        )
            (o = r[m]),
                Object.prototype.hasOwnProperty.call(n, o) &&
                    n[o] &&
                    p.push(n[o][0]),
                (n[o] = 0);
        for (a in l)
            Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
        for (d && d(t); p.length; ) p.shift()();
        return i.push.apply(i, c || []), s();
    }
    function s() {
        for (var e, t = 0; t < i.length; t++) {
            for (var s = i[t], a = !0, r = 1; r < s.length; r++) {
                var l = s[r];
                0 !== n[l] && (a = !1);
            }
            a && (i.splice(t--, 1), (e = o((o.s = s[0]))));
        }
        return e;
    }
    var a = {},
        n = { 1: 0 },
        i = [];
    function o(t) {
        if (a[t]) return a[t].exports;
        var s = (a[t] = { i: t, l: !1, exports: {} });
        return e[t].call(s.exports, s, s.exports, o), (s.l = !0), s.exports;
    }
    (o.m = e),
        (o.c = a),
        (o.d = function (e, t, s) {
            o.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: s });
        }),
        (o.r = function (e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module'
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (o.t = function (e, t) {
            if ((1 & t && (e = o(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var s = Object.create(null);
            if (
                (o.r(s),
                Object.defineProperty(s, 'default', {
                    enumerable: !0,
                    value: e
                }),
                2 & t && 'string' != typeof e)
            )
                for (var a in e)
                    o.d(
                        s,
                        a,
                        function (t) {
                            return e[t];
                        }.bind(null, a)
                    );
            return s;
        }),
        (o.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return o.d(t, 'a', t), t;
        }),
        (o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (o.p = './');
    var r = (window.webpackJsonp = window.webpackJsonp || []),
        l = r.push.bind(r);
    (r.push = t), (r = r.slice());
    for (var c = 0; c < r.length; c++) t(r[c]);
    var d = l;
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
        var o = [
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
            const { t: n, b: i, h: o, gid: r, d: l } = e,
                {
                    _m0: c,
                    _m1: d,
                    _m2: m,
                    _m3: p,
                    _m4: h,
                    _m5: g,
                    _m6: u,
                    _m7: y,
                    _m8: v,
                    _m9: f,
                    _m10: b,
                    _m11: k,
                    _m12: _,
                    _m13: M,
                    _m14: w
                } = a;
            return [
                o(
                    'div',
                    {
                        classMap: {
                            'slds-m-top_small': !0,
                            'slds-m-bottom_medium': !0
                        },
                        key: 48
                    },
                    [
                        t.isNoActiveGame
                            ? o('div', { key: 2 }, [
                                  o(
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
                                  o(
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
                            ? o('div', { key: 28 }, [
                                  o(
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
                                  o(
                                      'fieldset',
                                      {
                                          classMap: {
                                              'slds-form-element': !0,
                                              'slds-var-m-bottom_medium': !0
                                          },
                                          key: 16
                                      },
                                      [
                                          o(
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
                                          o(
                                              'div',
                                              {
                                                  classMap: {
                                                      'slds-form-element__control': !0
                                                  },
                                                  key: 15
                                              },
                                              [
                                                  o(
                                                      'span',
                                                      {
                                                          classMap: {
                                                              'slds-radio': !0
                                                          },
                                                          key: 9
                                                      },
                                                      [
                                                          o(
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
                                                                          p ||
                                                                          (a._m3 = i(
                                                                              t.handleChannelOnchange
                                                                          ))
                                                                  }
                                                              },
                                                              []
                                                          ),
                                                          o(
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
                                                                  o(
                                                                      'span',
                                                                      {
                                                                          classMap: {
                                                                              'slds-radio_faux': !0
                                                                          },
                                                                          key: 6
                                                                      },
                                                                      []
                                                                  ),
                                                                  o(
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
                                                  o(
                                                      'span',
                                                      {
                                                          classMap: {
                                                              'slds-radio': !0
                                                          },
                                                          key: 14
                                                      },
                                                      [
                                                          o(
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
                                                                          h ||
                                                                          (a._m4 = i(
                                                                              t.handleChannelOnchange
                                                                          ))
                                                                  }
                                                              },
                                                              []
                                                          ),
                                                          o(
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
                                                                  o(
                                                                      'span',
                                                                      {
                                                                          classMap: {
                                                                              'slds-radio_faux': !0
                                                                          },
                                                                          key: 11
                                                                      },
                                                                      []
                                                                  ),
                                                                  o(
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
                                  o(
                                      'div',
                                      {
                                          classMap: { 'slds-form-element': !0 },
                                          key: 21
                                      },
                                      [
                                          o(
                                              'label',
                                              {
                                                  classMap: {
                                                      'slds-form-element__label': !0
                                                  },
                                                  attrs: {
                                                      for:
                                                          '' +
                                                          r('text-input-id-1')
                                                  },
                                                  key: 18
                                              },
                                              [
                                                  o(
                                                      'abbr',
                                                      {
                                                          classMap: {
                                                              'slds-required': !0
                                                          },
                                                          attrs: {
                                                              title: 'required'
                                                          },
                                                          key: 17
                                                      },
                                                      [n('* ')]
                                                  ),
                                                  n('Your name')
                                              ]
                                          ),
                                          o(
                                              'div',
                                              {
                                                  classMap: {
                                                      'slds-form-element__control': !0
                                                  },
                                                  key: 20
                                              },
                                              [
                                                  o(
                                                      'input',
                                                      {
                                                          classMap: {
                                                              'slds-input': !0,
                                                              'slds-var-m-bottom_medium': !0
                                                          },
                                                          attrs: {
                                                              type: 'text',
                                                              id: r(
                                                                  'text-input-id-1'
                                                              )
                                                          },
                                                          key: 19,
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
                                      ? o(
                                            'div',
                                            {
                                                classMap: {
                                                    'slds-form-element': !0
                                                },
                                                key: 26
                                            },
                                            [
                                                o(
                                                    'label',
                                                    {
                                                        classMap: {
                                                            'slds-form-element__label': !0
                                                        },
                                                        attrs: {
                                                            for:
                                                                '' +
                                                                r(
                                                                    'text-input-id-1'
                                                                )
                                                        },
                                                        key: 23
                                                    },
                                                    [
                                                        o(
                                                            'abbr',
                                                            {
                                                                classMap: {
                                                                    'slds-required': !0
                                                                },
                                                                attrs: {
                                                                    title:
                                                                        'required'
                                                                },
                                                                key: 22
                                                            },
                                                            [n('* ')]
                                                        ),
                                                        n('Opponent name')
                                                    ]
                                                ),
                                                o(
                                                    'div',
                                                    {
                                                        classMap: {
                                                            'slds-form-element__control': !0
                                                        },
                                                        key: 25
                                                    },
                                                    [
                                                        o(
                                                            'input',
                                                            {
                                                                classMap: {
                                                                    'slds-input': !0,
                                                                    'slds-var-m-bottom_medium': !0
                                                                },
                                                                attrs: {
                                                                    type:
                                                                        'text',
                                                                    id: r(
                                                                        'text-input-id-2'
                                                                    )
                                                                },
                                                                key: 24,
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
                                  o(
                                      'button',
                                      {
                                          classMap: {
                                              'slds-button': !0,
                                              'slds-button_brand': !0,
                                              'slds-var-m-top_medium': !0
                                          },
                                          key: 27,
                                          on: {
                                              click:
                                                  f || (a._m9 = i(t.startGame))
                                          }
                                      },
                                      [n('Start Game')]
                                  )
                              ])
                            : null,
                        t.isJoinAGame
                            ? o('div', { key: 40 }, [
                                  t.offLine
                                      ? o(
                                            'div',
                                            {
                                                classMap: {
                                                    'slds-form-element': !0
                                                },
                                                key: 33
                                            },
                                            [
                                                o(
                                                    'label',
                                                    {
                                                        classMap: {
                                                            'slds-form-element__label': !0
                                                        },
                                                        attrs: {
                                                            for:
                                                                '' +
                                                                r(
                                                                    'text-input-id-1'
                                                                )
                                                        },
                                                        key: 30
                                                    },
                                                    [
                                                        o(
                                                            'abbr',
                                                            {
                                                                classMap: {
                                                                    'slds-required': !0
                                                                },
                                                                attrs: {
                                                                    title:
                                                                        'required'
                                                                },
                                                                key: 29
                                                            },
                                                            [n('* ')]
                                                        ),
                                                        n('Input game Id')
                                                    ]
                                                ),
                                                o(
                                                    'div',
                                                    {
                                                        classMap: {
                                                            'slds-form-element__control': !0
                                                        },
                                                        key: 32
                                                    },
                                                    [
                                                        o(
                                                            'input',
                                                            {
                                                                classMap: {
                                                                    'slds-input': !0,
                                                                    'slds-var-m-bottom_medium': !0
                                                                },
                                                                attrs: {
                                                                    type:
                                                                        'text',
                                                                    id: r(
                                                                        'text-input-id-3'
                                                                    )
                                                                },
                                                                key: 31,
                                                                on: {
                                                                    keyup:
                                                                        b ||
                                                                        (a._m10 = i(
                                                                            t.handleKeyUp
                                                                        )),
                                                                    change:
                                                                        k ||
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
                                        )
                                      : null,
                                  t.offLine
                                      ? o(
                                            'div',
                                            {
                                                classMap: {
                                                    'slds-form-element': !0
                                                },
                                                key: 38
                                            },
                                            [
                                                o(
                                                    'label',
                                                    {
                                                        classMap: {
                                                            'slds-form-element__label': !0
                                                        },
                                                        attrs: {
                                                            for:
                                                                '' +
                                                                r(
                                                                    'text-input-id-1'
                                                                )
                                                        },
                                                        key: 35
                                                    },
                                                    [
                                                        o(
                                                            'abbr',
                                                            {
                                                                classMap: {
                                                                    'slds-required': !0
                                                                },
                                                                attrs: {
                                                                    title:
                                                                        'required'
                                                                },
                                                                key: 34
                                                            },
                                                            [n('* ')]
                                                        ),
                                                        n('Your name')
                                                    ]
                                                ),
                                                o(
                                                    'div',
                                                    {
                                                        classMap: {
                                                            'slds-form-element__control': !0
                                                        },
                                                        key: 37
                                                    },
                                                    [
                                                        o(
                                                            'input',
                                                            {
                                                                classMap: {
                                                                    'slds-input': !0,
                                                                    'slds-var-m-bottom_medium': !0
                                                                },
                                                                attrs: {
                                                                    type:
                                                                        'text',
                                                                    id: r(
                                                                        'text-input-id-4'
                                                                    )
                                                                },
                                                                key: 36,
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
                                        )
                                      : null,
                                  o(
                                      'button',
                                      {
                                          classMap: {
                                              'slds-button': !0,
                                              'slds-button_brand': !0,
                                              'slds-var-m-top_medium': !0
                                          },
                                          key: 39,
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
                            ? o('div', { key: 47 }, [
                                  o(
                                      'div',
                                      {
                                          classMap: {
                                              'slds-spinner_container': !0
                                          },
                                          key: 46
                                      },
                                      [
                                          o(
                                              'div',
                                              {
                                                  classMap: {
                                                      'slds-spinner': !0,
                                                      'slds-spinner_medium': !0,
                                                      'slds-spinner_brand': !0
                                                  },
                                                  attrs: { role: 'status' },
                                                  key: 45
                                              },
                                              [
                                                  o(
                                                      'span',
                                                      {
                                                          classMap: {
                                                              'slds-assistive-text': !0
                                                          },
                                                          key: 41
                                                      },
                                                      [n('Loading')]
                                                  ),
                                                  o(
                                                      'div',
                                                      {
                                                          classMap: {
                                                              'slds-spinner__dot-a': !0
                                                          },
                                                          key: 42
                                                      },
                                                      []
                                                  ),
                                                  o(
                                                      'div',
                                                      {
                                                          classMap: {
                                                              'slds-spinner__dot-b': !0
                                                          },
                                                          key: 43
                                                      },
                                                      []
                                                  ),
                                                  o(
                                                      'div',
                                                      {
                                                          classMap: {
                                                              'custom-loading-text': !0
                                                          },
                                                          key: 44
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
            o && r.stylesheets.push.apply(r.stylesheets, o),
            (r.stylesheetTokens = {
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
        var d = Object(a.registerComponent)(c, { tmpl: l });
        function m(e, t, s, a) {
            const { t: n, d: i, h: o, k: r, b: l, i: c, c: m } = e,
                { _m0: p, _m1: h, _m2: g } = a;
            return [
                o(
                    'div',
                    {
                        classMap: {
                            header: !0,
                            'slds-var-p-around_medium': !0
                        },
                        key: 9
                    },
                    [
                        o('div', { classMap: { 'slds-grid': !0 }, key: 8 }, [
                            o(
                                'div',
                                {
                                    classMap: {
                                        'slds-col': !0,
                                        'slds-size_1-of-3': !0
                                    },
                                    key: 1
                                },
                                [
                                    o('span', { key: 0 }, [
                                        n('You : '),
                                        i(t.senderPlayerName)
                                    ])
                                ]
                            ),
                            o(
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
                                    o(
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
                                            o(
                                                'span',
                                                {
                                                    classMap: {
                                                        'slds-progress-bar__value': !0
                                                    },
                                                    styleMap: { width: '0%' },
                                                    key: 3
                                                },
                                                [
                                                    o(
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
                            o(
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
                                    o('span', { key: 6 }, [
                                        n('Opponent : '),
                                        i(t.receiverPlayerName)
                                    ])
                                ]
                            )
                        ])
                    ]
                ),
                o('div', { classMap: { 'game-container': !0 }, key: 30 }, [
                    o('div', { classMap: { gameBlock: !0 }, key: 14 }, [
                        o(
                            'div',
                            {
                                classMap: { 'slds-grid': !0, 'slds-wrap': !0 },
                                key: 13
                            },
                            c(t.gameBlock, function (e) {
                                return o(
                                    'div',
                                    {
                                        classMap: {
                                            'slds-col': !0,
                                            'slds-size_1-of-3': !0
                                        },
                                        key: r(12, e.cordinate)
                                    },
                                    [
                                        o(
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
                                                        p ||
                                                        (a._m0 = l(
                                                            t.handleBlock
                                                        ))
                                                }
                                            },
                                            [
                                                o(
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
                        ? o(
                              'div',
                              { classMap: { overlayToStop: !0 }, key: 22 },
                              [
                                  o(
                                      'div',
                                      {
                                          classMap: { 'overlay-content': !0 },
                                          key: 21
                                      },
                                      [
                                          o(
                                              'div',
                                              {
                                                  classMap: {
                                                      'slds-spinner_container': !0
                                                  },
                                                  key: 20
                                              },
                                              [
                                                  o(
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
                                                          o(
                                                              'span',
                                                              {
                                                                  classMap: {
                                                                      'slds-assistive-text': !0
                                                                  },
                                                                  key: 15
                                                              },
                                                              [n('Loading')]
                                                          ),
                                                          o(
                                                              'div',
                                                              {
                                                                  classMap: {
                                                                      'slds-spinner__dot-a': !0
                                                                  },
                                                                  key: 16
                                                              },
                                                              []
                                                          ),
                                                          o(
                                                              'div',
                                                              {
                                                                  classMap: {
                                                                      'slds-spinner__dot-b': !0
                                                                  },
                                                                  key: 17
                                                              },
                                                              []
                                                          ),
                                                          o(
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
                        ? o(
                              'div',
                              { classMap: { overlayToStop: !0 }, key: 26 },
                              [
                                  o(
                                      'div',
                                      {
                                          classMap: { 'overlay-content': !0 },
                                          key: 25
                                      },
                                      [
                                          o(
                                              'div',
                                              {
                                                  classMap: {
                                                      'custom-loading-text-1': !0
                                                  },
                                                  key: 24
                                              },
                                              [
                                                  o('p', { key: 23 }, [
                                                      i(t.winningOrLoseMsg)
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
                        : o('div', { classMap: { overlay: !0 }, key: 29 }, [
                              o(
                                  'div',
                                  {
                                      classMap: { 'overlay-content': !0 },
                                      key: 28
                                  },
                                  [
                                      m(
                                          'my-gamepanel',
                                          d,
                                          {
                                              key: 27,
                                              on: {
                                                  joingame:
                                                      h ||
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
        var p = Object(a.registerTemplate)(m);
        (m.stylesheets = []),
            i && m.stylesheets.push.apply(m.stylesheets, i),
            (m.stylesheetTokens = {
                hostAttribute: 'my-game-_game-host',
                shadowAttribute: 'my-game-_game'
            });
        var h = s(6);
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
                    (this.socket = h.connect(
                        'https://tic-tac-toe-lwc-oss.herokuapp.com/'
                    ));
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
        var u = Object(a.registerComponent)(g, { tmpl: p });
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
        class f extends a.LightningElement {
            connectedCallback() {
                const e = h.connect('http://localhost:3001/');
                e.on('connect', () => {
                    console.log('app connected'),
                        e.emit('message', { message: 'Hello server1' });
                }),
                    e.on('message1', (e) => {
                        console.log(e);
                    });
            }
        }
        var b = Object(a.registerComponent)(f, { tmpl: v });
        const k = Object(a.createElement)('my-app', { is: b });
        document.querySelector('#main').appendChild(k);
    }
});
