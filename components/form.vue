<script setup>
const createCharacter = () => {
  console.log("hola");
};
</script>
<template>
  <div class="form-card flex">
    <FormKit type="form"
    netlify
    action="/"
    method="POST"
    name="Contact"  
    :submit-label="$t('form_submit')"
    :submit-attrs="{
      inputClass: 'submit-button',
      outerClass: 'flex flex-center mb-4',
    }">
      <h2 class="text-center small-title">{{ $t("form_title") }}</h2>
      <input type="hidden" name="form-name" value="Contact" />
      <FormKit
        type="text"
        name="name"
        id="name"
        :label="$t('form_name')"
        :placeholder="$t('form_name_placeholder')"
        validation="required|alpha_spaces:latin"
        input-class="input-class mt-2"
        messages-class="helper-text error-text"
        outer-class="mb-4"
      />
      <FormKit
        type="email"
        name="email"
        id="email"
        :placeholder="$t('form_email_placeholder')"
        placeholder="renuStudios@gmail.com"
        validation="required|email"
        input-class="input-class mt-2"
        messages-class="helper-text error-text "
        outer-class="mb-4"
      />
      <FormKit
        type="textarea"
        name="message"
        id="message"
        :label="$t('form_message')"
        :placeholder="$t('form_message_placeholder')"
        rows="5"
        validation="required|min:10"
        input-class="input-class messages-class mt-2"
        messages-class="helper-text error-text"
        outer-class="mb-4"
      />
    </FormKit>
  </div>
</template>
<style lang="scss">
.input-class {
  background: var(--gray-color);
  box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.5),
    inset 5px 5px 15px rgba(136, 160, 183, 0.25);
  border-radius: 20px;
  padding: var(--space-2);
  border: none;
  text-align: center;
  font-size: calc(var(--font-size-base) - 0.2vw);
  font-family: "Merienda-Light";
  color: red;
}
.messages-class{
  width: 100%;
}
.error-text {
  color:orangered;
}
.submit-button {
  background: var(--primary-color);
  font: inherit;
  color: var(--white-color);
  outline-color: var(--primary-color);
  border-color: var(--primary-color);
  padding: var(--space-2) var(--space-3);
  box-shadow: var(--shadow-default);
  border-radius: 20px;
  border-width: 0;
  cursor: pointer;
}
.submit-button:active {
  box-shadow: var(--shadow-default-active);
}

.form-card {
  background: var(--gray-color);
  box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.5),
    5px 5px 15px rgba(136, 160, 183, 0.25);
  border-radius: 20px;
  padding: var(--space-2);
  min-width: 80%;
  margin: 0 auto;
}
form{
  padding-left: var(--space-4);
  width: 80%;
}
</style>
