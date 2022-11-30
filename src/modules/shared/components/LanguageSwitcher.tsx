/* eslint-disable no-unused-vars */
import Form from 'react-bootstrap/Form';
import { LangService } from '~shared';
import { SUPPORTED_LOCALES } from '~config';
import Select from 'react-select';
import { log } from '~core/logging/logger';

export enum MenuType {
  Select = 'select',
  Radio = 'radio',
}

export type LanguageSwitcherProps = {
  menuType?: MenuType;
};

export default function LanguageSwitcher(props: LanguageSwitcherProps) {
  const langService = new LangService();

  const changeLanguage = (locale: string) => {
    log('Language changed');
    langService.changeLanguage(locale);
    // i18n.changeLanguage(locale);
    // router.push({ usePathname, query }, asPath, { locale });
  };

  return (
    <>
      {props.menuType === MenuType.Radio && (
        <Form>
          {SUPPORTED_LOCALES.map((l) => {
            return (
              <Form.Check
                type="radio"
                name="radio_locale"
                id={l.locale}
                key={l.locale}
                value={l.locale}
                title={l.displayName}
                label={`${l.displayName} - ${l.culture}`}
                onChange={() => changeLanguage(l.locale)}
                checked={l.locale === langService.languageDetect()}
              />
            );
          })}
        </Form>
      )}

      {props.menuType === MenuType.Select && (
        <Select
          name="select_locale"
          onChange={(e) => {
            if (e) changeLanguage(e?.value);
          }}
          options={SUPPORTED_LOCALES.map((l) => ({ value: l.locale, label: `${l.displayName} - ${l.culture}` }))}
          placeholder={'selectLanguage' as string}
        />
      )}
    </>
  );
}
