'use strict';

/**
 * @ngdoc function
 * @name srcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the srcApp
 */




angular.module('srcApp')
.filter('replace', function () {
    var pat = / /gi;
    return function (text) {
        var clean = text.replace(pat, '-');
        var temp = clean.split('---');
        if (temp.length>1) {
          clean = temp[0];
        }
        return clean;
    };
})
.controller('MainCtrl', function($scope, $interval) {

	$scope.sections = {
		sectionIndex: [
     {'title': 'Overview', 'thumb': 'Ov', 'text': 'Collaboratively administrate empowered markets via plug-and-play networks.', 'tags': 'tagshere', 'loc': '#overview'},
     {'title': 'Colors', 'thumb': 'Co', 'text': 'Dynamically procrastinate B2C users after installed base benefits.', 'tags': 'tagshere', 'loc': '#colors'},
     {'title': 'Logos', 'thumb': 'Lo', 'text': 'Dramatically visualize customer directed convergence without revolutionary ROI.', 'tags': 'tagshere', 'loc': '#logos'},
     {'title': 'Maps', 'thumb': 'Ma', 'text': 'Efficiently unleash cross-media information without cross-media value.', 'tags': 'tagshere', 'loc': '#maps'},
     {'title': 'Banners', 'thumb': 'Ba', 'text': 'Quickly maximize timely deliverables for real-time schemas.', 'tags': 'tagshere', 'loc': '#banners'},
     {'title': 'Responsive', 'thumb': 'Re', 'text': 'Dramatically maintain clicks-and-mortar solutions without functional solutions.', 'tags': 'tagshere', 'loc': '#responsive'},
     {'title': 'Containers', 'thumb': 'Ct', 'text': 'Completely synergize resource sucking relationships via premier niche markets.', 'tags': 'tagshere', 'loc': '#containers'},
     {'title': 'Media Queries', 'thumb': 'Mq', 'text': 'Professionally cultivate one-to-one customer service with robust ideas. ', 'tags': 'tagshere', 'loc': '#mediaqueries'},
     {'title': 'Visibility', 'thumb': 'Vi', 'text': 'Dynamically innovate resource-leveling customer service for state of the art customer service.', 'tags': 'tagshere', 'loc': '#visibility'},
     {'title': 'Typography', 'thumb': 'Ty', 'text': 'Objectively innovate empowered manufactured products whereas parallel platforms.', 'tags': 'tagshere', 'loc': '#typography'},
     {'title': 'Fonts', 'thumb': 'Fo', 'text': 'Holisticly predominate extensible testing procedures for reliable supply chains.', 'tags': 'tagshere', 'loc': '#fonts'},
     {'title': 'Iconography', 'thumb': 'Ic', 'text': 'Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.', 'tags': 'tagshere', 'loc': '#iconography'},
     {'title': 'Formatting', 'thumb': 'Fo', 'text': 'Proactively envisioned multimedia based expertise and cross-media growth strategies.', 'tags': 'tagshere', 'loc': '#formatting'},
     {'title': 'Media', 'thumb': 'Me', 'text': 'Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.', 'tags': 'tagshere', 'loc': '#media'},
     {'title': 'Product Images', 'thumb': 'Pi', 'text': 'Holistically pontificate installed base portals after maintainable products.', 'tags': 'tagshere', 'loc': '#productimages'},
     {'title': 'Thumbnails', 'thumb': 'Th', 'text': 'Phosfluorescently engage worldwide methodologies with web-enabled technology.', 'tags': 'tagshere', 'loc': '#thumbnails'},
     {'title': 'Videos', 'thumb': 'Vd', 'text': 'Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking.', 'tags': 'tagshere', 'loc': '#videos'},
     {'title': '360 Photos', 'thumb': '360', 'text': 'Completely pursue scalable customer service through sustainable potentialities.', 'tags': 'tagshere', 'loc': '#360photos'},
     {'title': 'HTML Elements', 'thumb': '</>', 'text': 'Collaboratively administrate turnkey channels whereas virtual e-tailers.', 'tags': 'tagshere', 'loc': '#html'},
     {'title': 'Lists', 'thumb': 'Li', 'text': 'Objectively seize scalable metrics whereas proactive e-services.', 'tags': 'tagshere', 'loc': '#lists'},
     {'title': 'Tables', 'thumb': 'Ta', 'text': 'Seamlessly empower fully researched growth strategies and interoperable internal or "organic" sources.', 'tags': 'tagshere', 'loc': '#tables'},
     {'title': 'Links & Downloads', 'thumb': 'Ld', 'text': 'Energistically scale future-proof core competencies vis-a-vis impactful experiences.', 'tags': 'tagshere', 'loc': '#linksdownloads'},
     {'title': 'Inputs', 'thumb': 'In', 'text': 'Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness. ', 'tags': 'tagshere', 'loc': '#inputs'},
     {'title': 'Text Areas', 'thumb': 'Ta', 'text': 'Dramatically synthesize integrated schemas with optimal networks.', 'tags': 'tagshere', 'loc': '#textareas'},
     {'title': 'Forms', 'thumb': 'Fo', 'text': 'Energistically scale future-proof core competencies vis-a-vis impactful experiences.', 'tags': 'tagshere', 'loc': '#forms'},
     {'title': 'Labels', 'thumb': 'La', 'text': 'Interactively procrastinate high-payoff content without backward-compatible data.', 'tags': 'tagshere', 'loc': '#labels'},
     {'title': 'Buttons', 'thumb': 'Bt', 'text': 'Dramatically synthesize integrated schemas with optimal networks.', 'tags': 'tagshere', 'loc': '#buttons'},
     {'title': 'Interactions', 'thumb': '{$}', 'text': 'Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness. ', 'tags': 'tagshere', 'loc': '#interactions'},
     {'title': 'Animations', 'thumb': 'An', 'text': 'Energistically scale future-proof core competencies vis-a-vis impactful experiences.', 'tags': 'tagshere', 'loc': '#animations'},
     {'title': 'Slideshows', 'thumb': 'Ss', 'text': 'Quickly cultivate optimal processes and tactical architectures.', 'tags': 'tagshere', 'loc': '#slideshows'},
     {'title': 'Modals', 'thumb': 'Mo', 'text': 'Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness. ', 'tags': 'tagshere', 'loc': '#modals'},
     {'title': 'LightBoxes', 'thumb': 'Lb', 'text': 'Dramatically synthesize integrated schemas with optimal networks.', 'tags': 'tagshere', 'loc': '#lightboxes'},
     {'title': 'Dropdowns', 'thumb': 'Dd', 'text': 'Energistically scale future-proof core competencies vis-a-vis impactful experiences.', 'tags': 'tagshere', 'loc': '#dropdowns'},
     {'title': 'Tooltips', 'thumb': 'Tt', 'text': 'Quickly cultivate optimal processes and tactical architectures.', 'tags': 'tagshere', 'loc': '#tooltips'},
     {'title': 'Switches', 'thumb': 'Sw', 'text': 'Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness. ', 'tags': 'tagshere', 'loc': '#switches'},
     {'title': 'Breadcrumbs', 'thumb': 'Bc', 'text': 'Interactively procrastinate high-payoff content without backward-compatible data.', 'tags': 'tagshere', 'loc': '#breadcrumbs'},
     {'title': 'Pagination', 'thumb': 'Pa', 'text': 'Energistically scale future-proof core competencies vis-a-vis impactful experiences.', 'tags': 'tagshere', 'loc': '#pagination'},
     {'title': 'Range Sliders', 'thumb': 'Rs', 'text': 'Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness. ', 'tags': 'tagshere', 'loc': '#rangesliders'},
     {'title': 'Alerts & Warnings', 'thumb': 'Aw', 'text': 'Dramatically synthesize integrated schemas with optimal networks.', 'tags': 'tagshere', 'loc': '#alertswarnings'},
     {'title': 'Progress Bars', 'thumb': 'Pb', 'text': 'Quickly cultivate optimal processes and tactical architectures.', 'tags': 'tagshere', 'loc': '#progressbars'},
     {'title': 'Accordions', 'thumb': 'Ac', 'text': 'Interactively procrastinate high-payoff content without backward-compatible data.', 'tags': 'tagshere', 'loc': '#accordions'},
     {'title': 'Tabs', 'thumb': 'Ta', 'text': 'Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness. ', 'tags': 'tagshere', 'loc': '#tabs'}
]};
  $scope.search = null;
});
