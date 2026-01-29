# Tailwind to SCSS Migration Tracking

This file tracks the migration progress of all components from Tailwind CSS to SCSS.

**Last Updated**: Migration in progress

## Migration Status

- **Total Components**: 41
- **Migrated**: 20
- **Remaining**: 21
- **Progress**: 49%

## Component Migration Checklist

### Default Components (5)

- [x] `components/default/HomePageContent.tsx`
- [x] `components/default/HomeFirstSection.tsx`
- [ ] `components/default/HomeFirstSectionWrapper.tsx`
- [ ] `components/default/HomePageContentWrapper.tsx`
- [ ] `components/default/PlotsShowcaseWrapper.tsx`

### Skyscrapper Components (7)

- [x] `components/skyscrapper/SkyscrapperHomeFirstSection.tsx`
- [x] `components/skyscrapper/SkyscrapperHomesSecondSection.tsx`
- [x] `components/skyscrapper/SkyscrapperShowcaseCard.tsx`
- [x] `components/skyscrapper/SkyscrapperPlotsShowcase.tsx`
- [ ] `components/skyscrapper/SkyscrapperHomeFirstSectionWrapper.tsx`
- [ ] `components/skyscrapper/SkyscrapperHomesSecondSectionWrapper.tsx`
- [ ] `components/skyscrapper/SkyscrapperPlotsShowcaseWrapper.tsx`

### Voodvale Components (12)

- [x] `components/voodvale/VoodvaleHomeFirstSection.tsx`
- [x] `components/voodvale/VoodvaleHomeSecondSection.tsx`
- [x] `components/voodvale/HeaderSection.tsx`
- [x] `components/voodvale/GridSection.tsx`
- [x] `components/voodvale/ContentSection.tsx`
- [x] `components/voodvale/VoodvalePlotsShowcase.tsx`
- [ ] `components/voodvale/VoodvaleHomeFirstSectionWrapper.tsx`
- [ ] `components/voodvale/VoodvaleHomeSecondSectionWrapper.tsx`
- [ ] `components/voodvale/VoodvalePlotsShowcaseWrapper.tsx`
- [ ] `components/voodvale/HeaderSectionWrapper.tsx`
- [ ] `components/voodvale/GridSectionWrapper.tsx`
- [ ] `components/voodvale/ContentSectionWrapper.tsx`
- [x] `components/VoodvaleSection.tsx`

### Common Components (13)

- [x] `components/common/PlotsShowcase.tsx`
- [ ] `components/common/PlotThumbCard.tsx`
- [x] `components/common/plot-thumb-card/plot-thumb-card-parts.tsx`
- [x] `components/common/plot-thumb-card/voodvale-plot-thumb-card/voodvale-plot-thumb-card-parts.tsx`
- [x] `components/common/plot-thumb-card/skyscrapper-plot-thumb-card/skyscrapper-plot-thumb-card-parts.tsx`
- [ ] `components/common/ItemSlider.tsx` (No Tailwind classes - uses Swiper only)
- [x] `components/common/plan-view/PlanView.tsx`
- [x] `components/common/PlanViewWrapper.tsx`
- [x] `components/common/plan-view/popups/plan-view-popup.tsx`
- [x] `components/common/plan-view/popups/container-plan-popup.tsx`
- [x] `components/common/plan-view/popups/floor-view-popup.tsx`
- [x] `components/common/image.tsx`
- [x] `components/common/background-media.tsx`

### Icon Components (3)

- [ ] `components/icons/ruler-icon.tsx` (No Tailwind classes - accepts className prop only)
- [ ] `components/icons/bedroom-icon.tsx` (No Tailwind classes - accepts className prop only)
- [ ] `components/icons/bathroom-icon.tsx` (No Tailwind classes - accepts className prop only)

## Removed Components

- **UI Components**: `components/ui/select.tsx` (removed)
- **Editor Components**: `components/editor/ColorPickerField.tsx` (removed)

## Notes

- Components are migrated one at a time
- Each component migration updates this file
- Semantic class grouping is used where multiple utilities are combined
- Responsive variants are included within semantic classes using media queries
- **Tailwind has been completely removed** from the project
- UI and Editor components have been removed
