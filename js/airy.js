(function(window) {
    'use strict';
    class Airy {
        constructor(config) {
            this.config = config;
            this.init();
        }
        init() {
            // 代码高亮
            let $footer = $('.footer');
            if (
                $footer.height() + $footer.offset().top + 50 <
                window.screen.height
            ) {
                $footer.addClass('fix');
            }

            // 代码高亮
            if (this.config.toc) {
                this.scrollToc();
            }
            this.toggleMenu();
        }

        toggleMenu() {
            window.addEventListener('mousedown', event => {
                const { target } = event;
                let $panel = $('.category-panel');
                if (target.className === 'category-menu') {
                    $panel.toggleClass("show");
                    console.log(target);
                } else if(target.className !== 'category-list-link') {
                    $panel.removeClass("show");
                }
                return true;
            });
        }

        scrollToc() {
            let SPACING = 20;
            let $toc = $('.post-toc');
            let $footer = $('.footer');

            if ($toc.length) {
                let minScrollTop = $toc.offset().top;
                let maxScrollTop =
                    $footer.offset().top -
                    window.screen.height +
                    $toc.height() +
                    $footer.height();

                console.log(
                    $footer.offset().top,
                    $toc.height(),
                    $footer.height(),
                    window.screen.height
                );
                let tocState = {
                    start: {
                        position: 'absolute',
                        top: 0
                    },
                    process: {
                        position: 'fixed',
                        top: SPACING
                    },
                    end: {
                        position: 'absolute',
                        top: maxScrollTop - minScrollTop + SPACING
                    }
                };

                $(window).scroll(function() {
                    let scrollTop = $(window).scrollTop();
                    console.log(scrollTop, minScrollTop, maxScrollTop);

                    if (scrollTop < minScrollTop) {
                        $toc.css(tocState.start);
                    } else if (scrollTop > maxScrollTop) {
                        $toc.css(tocState.end);
                    } else {
                        $toc.css(tocState.process);
                    }
                });
            }
        }
    }

    let config = window.config;
    window.addEventListener('load', () => {
        window.airy = new Airy(config);
    });
})(window);
