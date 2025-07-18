import { IconButton, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from '@invoke-ai/ui-library';
import {
  useAddControlLayer,
  useAddInpaintMask,
  useAddNewRegionalGuidanceWithARefImage,
  useAddRasterLayer,
  useAddRegionalGuidance,
} from 'features/controlLayers/hooks/addLayerHooks';
import { useCanvasIsBusy } from 'features/controlLayers/hooks/useCanvasIsBusy';
import { useIsEntityTypeEnabled } from 'features/controlLayers/hooks/useIsEntityTypeEnabled';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PiPlusBold } from 'react-icons/pi';

export const EntityListGlobalActionBarAddLayerMenu = memo(() => {
  const { t } = useTranslation();
  const isBusy = useCanvasIsBusy();
  const addInpaintMask = useAddInpaintMask();
  const addRegionalGuidance = useAddRegionalGuidance();
  const addRegionalReferenceImage = useAddNewRegionalGuidanceWithARefImage();
  const addRasterLayer = useAddRasterLayer();
  const addControlLayer = useAddControlLayer();
  const isRegionalGuidanceEnabled = useIsEntityTypeEnabled('regional_guidance');
  const isControlLayerEnabled = useIsEntityTypeEnabled('control_layer');
  const isInpaintLayerEnabled = useIsEntityTypeEnabled('inpaint_mask');

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        minW={8}
        variant="link"
        alignSelf="stretch"
        tooltip={t('controlLayers.addLayer')}
        aria-label={t('controlLayers.addLayer')}
        icon={<PiPlusBold />}
        data-testid="control-layers-add-layer-menu-button"
        isDisabled={isBusy}
      />
      <MenuList>
        <MenuGroup title={t('controlLayers.regional')}>
          <MenuItem icon={<PiPlusBold />} onClick={addInpaintMask} isDisabled={!isInpaintLayerEnabled}>
            {t('controlLayers.inpaintMask')}
          </MenuItem>
          <MenuItem icon={<PiPlusBold />} onClick={addRegionalGuidance} isDisabled={!isRegionalGuidanceEnabled}>
            {t('controlLayers.regionalGuidance')}
          </MenuItem>
          <MenuItem icon={<PiPlusBold />} onClick={addRegionalReferenceImage} isDisabled={!isRegionalGuidanceEnabled}>
            {t('controlLayers.regionalReferenceImage')}
          </MenuItem>
        </MenuGroup>
        <MenuGroup title={t('controlLayers.layer_other')}>
          <MenuItem icon={<PiPlusBold />} onClick={addControlLayer} isDisabled={!isControlLayerEnabled}>
            {t('controlLayers.controlLayer')}
          </MenuItem>
          <MenuItem icon={<PiPlusBold />} onClick={addRasterLayer}>
            {t('controlLayers.rasterLayer')}
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
});

EntityListGlobalActionBarAddLayerMenu.displayName = 'EntityListGlobalActionBarAddLayerMenu';
