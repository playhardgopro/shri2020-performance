let widths = '';
window.addEventListener('scroll', function () {
  widths += document.querySelectorAll('body')[0].offsetWidth;
});

$(document).ready(function () {
  var carousel = $('#carousel');

  carousel.owlCarousel();
});

function buildHTML(e) {
  e.events.forEach(function (e) {
    var t, n, o, r, i, c, a, l, s, d, u, m, p, v, h, y, g, f, S, q, x, L, C;
    (v = document.querySelector('.content')),
      (n = (t = document.querySelector('template').cloneNode(!0)
        .content).querySelector('.card')),
      (l = t.querySelector('.card-specs')),
      (i = t.querySelector('.card-heading')),
      (o = t.querySelector('.card-title')),
      (r = t.querySelector('.card-icon')),
      (c = t.querySelector('.card-source')),
      (a = t.querySelector('.card-time')),
      (o.textContent = e.title),
      (r.src = 'img/' + e.icon + '.svg'),
      (c.textContent = e.source),
      (a.textContent = e.time),
      's' == e.size && a.classList.add('card-time_block'),
      e.description &&
        null != e.description &&
        (((d = document
          .querySelector('.template-description')
          .content.querySelector('.card-description')).textContent =
          e.description),
        'l' == e.size && d.classList.add('card-description_big'),
        'critical' == e.type &&
          (d.classList.add('description_critical'),
          i.classList.add('heading-critical'),
          l.classList.add('specs-critical'),
          e.data &&
            e.data.image &&
            ((C = document.querySelector('.template-cam').content),
            d.appendChild(C))),
        n.appendChild(d.cloneNode(!0))),
      e.data &&
        ('graph' == (u = e.data).type &&
          (((p = (m = document
            .querySelector('.template-graph')
            .content.querySelector('.card-data')).querySelector('img')).srcset =
            '\n            img/Richdata.png 590w,\n            img/Richdata@2x.png 1180w,\n            img/Richdata@3x.png 1770w'),
          (p.sizes =
            '\n                (max-width: 590px) 590px,\n        (max-width: 1180px) 1180px,\n        1770px\n                '),
          (p.src = 'img/Richdata@2x.png'),
          n.appendChild(m.cloneNode(!0))),
        u.temperature &&
          ((g = (y = document
            .querySelector('.template-climat')
            .content.querySelector('.card-data')).querySelector(
            '.climat-block_data__temp'
          )),
          (f = y.querySelector('.climat-block_data__hum')),
          (g.textContent = u.temperature + ' C'),
          (f.textContent = u.humidity + '%'),
          n.appendChild(y.cloneNode(!0))),
        u.volume &&
          ((x = (S = document
            .querySelector('.template-music')
            .content.querySelector('.card-data_music')).querySelector(
            '.cover'
          )),
          (L = S.querySelector('.song-title')),
          (q = S.querySelector('.song-length')),
          (S.querySelector('.song-volume').textContent = u.volume + '%'),
          (q.textContent = u.track.length),
          (L.textContent = u.artist + ' - ' + u.track.name),
          (x.src = u.albumcover),
          n.appendChild(S.cloneNode(!0))),
        u.buttons &&
          ((s = document.querySelector('.template-buttons').content),
          n.appendChild(s.cloneNode(!0)))),
      n.classList.add('card_size_' + e.size),
      'critical' == e.type && n.classList.add('critical'),
      (h = document.importNode(t, !0)),
      v.appendChild(h);
  });
}
// FIXME: warning!
document.addEventListener(
  'DOMContentLoaded',
  function () {
    const buttonsContainer = document.querySelector('.buttons-wrap');
    const fridgeInfoContainer = document.querySelector(
      '.card_size_m:nth-child(8) .card-description'
    );
    setTimeout(function () {
      const confirmPurchaseButton = document.querySelector(
        '.buttons-wrap .button_yellow'
      );
      const purchaseListContainer = document.createElement('div');
      const purchaseListTitle = document.createElement('p');
      const purchaseList = document.createElement('ol');
      const purchaseListItemOne = document.createElement('li');
      const purchaseListItemTwo = document.createElement('li');

      purchaseListContainer.setAttribute('class', 'purchase-list-wrap');
      purchaseListTitle.setAttribute(
        'class',
        'card-description card-description_big description_critical'
      );
      purchaseListTitle.textContent = 'Список покупок:';
      purchaseList.setAttribute('class', 'purchase-list');
      purchaseListItemOne.setAttribute('class', 'purchase-list__item');
      purchaseListItemOne.textContent = 'Хлеб';
      purchaseListItemTwo.setAttribute('class', 'purchase-list__item');
      purchaseListItemTwo.textContent = 'Молоко';

      purchaseListContainer.appendChild(purchaseListTitle);
      purchaseListContainer.appendChild(purchaseList);
      purchaseList.appendChild(purchaseListItemOne);
      purchaseList.appendChild(purchaseListItemTwo);

      confirmPurchaseButton.onclick = () => {
        fridgeInfoContainer.replaceWith(purchaseListContainer);
        buttonsContainer.style.display = 'none';
      };
    }, 500);

    document
      .getElementsByClassName('header-menu__switcher')[0]
      .addEventListener('click', function () {
        document
          .getElementsByClassName('header-menu')[0]
          .classList.toggle('header-menu_active');
      });
  },
  !1
);
